import express from "express";
import mapUser from "../halpers/mapUser.js";
import { register, login, updateUser } from "../controllers/user-controller.js";
import crypto from "crypto";
import User from "../models/user-model.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

const router = express.Router({ mergeParams: true });

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

router.post("/register", async (req, res) => {
  try {
    const { user, token } = await register(req.body.email, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });

    transporter.sendMail({
      to: user.email,
      from: process.env.MAIL,
      subject: "Аккаунт создан",
      html: `
      <h2>Добро пожаловать в интернет-магазин oasis!</h2>`,
    });
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { user, token } = await login(req.body.email, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.post("/logout", (req, res) => {
  res.cookie("token", "", { httpOnly: true }).send({});
});

router.post("/reset", async (req, res) => {
  try {
    const buffer = await new Promise((resolve, reject) => {
      crypto.randomBytes(20, (error, buffer) => {
        if (error) {
          reject(error);
        } else {
          resolve(buffer);
        }
      });
    });
    const token = buffer.toString("hex");

    const candidate = await User.findOne({ email: req.body.email });
    if (candidate) {
      candidate.resetToken = token;
      candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
      await candidate.save();

      await transporter.sendMail({
        to: candidate.email,
        from: process.env.MAIL,
        subject: "Восстановление доступа в аккаунт",
        html: `
        <h2>Вы забыли пароль?</h2>
        <p>Если нет, то просто проигнорируйте данное сообщение>
        <p>Иначе пройдите по ссылке для восстановления доступа</p>
        <p><a href="${process.env.BASE_URL}/auth/password/${candidate.resetToken}">Восстановить доступ</a></p>`,
      });
      res.send({
        error: null,
      });
    } else {
      return res.send({
        error: "Пользователь с таким email не найден",
      });
    }
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.get("/password/:token", async (req, res) => {
  try {
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
    });
    if (!user) {
      res.send({
        error: "Ошибка токена. Пользователь не найден ",
      });
    } else {
      res.send({ user: user });
    }
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.patch("/password/:token/:id", async (req, res) => {
  console.log(req.body);
  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const newUser = await updateUser(req.params.id, {
      password: passwordHash,
      resetToken: null,
      resetTokenExp: null,
    });

    const { user, token } = await login(newUser.email, req.body.password);
    res
      .cookie("token", token, { httpOnly: true })
      .send({ error: null, user: mapUser(user) });
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

export default router;
