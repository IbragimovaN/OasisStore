import Product from "../models/product-model.js";
//add
async function addProduct(product) {
  return Product.create(product);
}

//edit
async function editProduct(id, newData) {
  return Product.findByIdAndUpdate(id, newData, { returnDocument: "after" });
}
//delete
async function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}
//get list with search and pagination
async function getProducts(search = "", limit = 9, page = 1) {
  const [products, count] = await Promise.all([
    Product.find({ title: { $regex: search, $options: "i" } })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    Product.countDocuments({ title: { $regex: search, $options: "i" } }),
  ]);
  return {
    products,
    lastPage: Math.ceil(count / limit),
  };
}

//get item
async function getProduct(id) {
  return Product.findById(id);
}

export { addProduct, editProduct, deleteProduct, getProducts, getProduct };
