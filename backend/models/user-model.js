import mongoose from "mongoose";
import ROLES from "../constants/roles.js";

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: ROLES.USER,
    },
    resetToken: String,
    resetTokenExp: Date,
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
