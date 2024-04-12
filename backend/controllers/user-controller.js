import bcrypt from "bcrypt";
import User from "../models/user-model.js";
import { generateToken } from "../halpers/generateToken.js";

//register
async function register(login, password) {
  if (!password) {
    throw new Error("Password is empty");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await User.create({ login, password: passwordHash });

  return user;
}

async function login(login, password) {
  const user = await User.findOne({ login: login });
  if (!user) {
    throw new Error("Пользователь не найден");
  }
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!password) {
    throw new Error("Password is empty");
  }
  const token = generateToken({ id: user.id });
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

// edit (roles)
async function updateUser(id, newData) {
  return User.findByIdAndUpdate(id, newData, { returnDocument: "after" });
}

export { register, login, getUsers, getRoles, deleteUser, updateUser };
