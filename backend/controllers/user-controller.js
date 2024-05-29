import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import { generateToken } from "../halpers/generateToken.js";
import { getProduct } from "./product-controller.js";
import { populate } from "dotenv";

async function register(email, password) {
  if (!password) {
    throw new Error("Заполните пароль");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("Пользователь с таким email уже существует");
  }

  const passwordHash = await bcrypt.hash(password, 10);
  let user = await User.create({ email: email, password: passwordHash });
  user = await user.populate({
    path: "favourites",
  });
  const token = generateToken({ id: user.id }, process.env.JWT_SECRET);
  return { user, token };
}

async function login(email, password) {
  let user = await User.findOne({ email: email });
  user = await user.populate({
    path: "favourites",
  });
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Не верный пароль");
  }
  const token = generateToken({ id: user.id }, process.env.JWT_SECRET);
  return { user, token };
}

async function getUsers() {
  return User.find();
}

async function getRoles() {
  return [
    { id: ROLES.ADMIN, name: "Admin" },
    { id: ROLES.MODERATOR, name: "Moderator" },
    { id: ROLES.USER, name: "User" },
  ];
}

async function deleteUser(id) {
  return User.deleteOne({ _id: id });
}

async function updateUser(id, newData) {
  let user = await User.findByIdAndUpdate(id, newData, {
    returnDocument: "after",
  });
  user = await user.populate({
    path: "favourites",
  });
  return user;
}

async function addFavouriteProduct(productId, userId) {
  const currentProduct = await getProduct(productId);

  let user = await User.findByIdAndUpdate(
    userId,
    {
      $push: { favourites: currentProduct },
    },
    { returnDocument: "after" }
  );
  user = await user.populate({
    path: "favourites",
  });

  return user;
}
//delete
async function deleteFavouriteProduct(productId, userId) {
  const user = await User.findByIdAndUpdate(userId, {
    $pull: { favourites: productId },
  });
  return user;
}

export {
  register,
  login,
  getUsers,
  getRoles,
  deleteUser,
  updateUser,
  addFavouriteProduct,
  deleteFavouriteProduct,
};
