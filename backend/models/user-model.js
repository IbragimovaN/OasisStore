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
    favourites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    resetToken: String,
    resetTokenExp: Date,
  },

  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
