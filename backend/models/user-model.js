import mongoose from "mongoose";
import ROLES from "../constants/roles.js";

const UserSchema = mongoose.Schema(
  {
    login: {
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
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
