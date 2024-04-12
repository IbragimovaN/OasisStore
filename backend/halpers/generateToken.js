import jwt from "jsonwebtoken";
import "dotenv/config";
import express from "express";

const secret = process.env.JWT_SECRET;

function generateToken(data) {
  return jwt.sign(data, secret, { expiresIn: "30d" });
}

function verify(token) {
  if (!token) {
    throw new Error("Invalid token");
  }
  return jwt.verify(token, secret);
}

export { generateToken, verify };
