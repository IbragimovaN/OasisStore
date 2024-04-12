import mongoose from "mongoose";
import validator from "validator";

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image_url: {
      type: String,
      // required: true,
      // validate: {
      //   validator: validator.isURL,
      //   message: "Image should be a valid url",
      // },
    },

    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
    hair_type: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
