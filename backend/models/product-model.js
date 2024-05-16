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
    },

    price: {
      type: Number,
    },
    rating: {
      type: Number,
    },
    description: {
      type: String,
    },
    brand: {
      type: String,
    },
    category: {
      type: String,
    },
    age: {
      type: String,
    },
    hair_type: {
      type: String,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId, //указываем что по идентефикатору - id мы ссылаемся на модель Comment чтобы связать посто с комментариям, тк комментариев может быть несколько, указываем массив
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
