import mongoose from "mongoose";
import mapComment from "./mapComment.js";
export default function (product) {
  return {
    id: product.id,
    title: product.title,
    imgUrl: product.image_url,
    brand: product.brand,
    category: product.category,
    age: product.age,
    price: product.price,
    rating: product.rating,
    description: product.description,
    hairType: product.hair_type,
    comments: product.comments.map((comment) =>
      mongoose.isObjectIdOrHexString(comment) ? comment : mapComment(comment)
    ),
  };
}
