import Product from "../models/product-model.js";

async function addProduct(product) {
  return Product.create(product);
}

async function editProduct(id, newData) {
  return Product.findByIdAndUpdate(id, newData, { returnDocument: "after" });
}

async function deleteProduct(id) {
  return Product.deleteOne({ _id: id });
}

async function getProducts(search = "", limit, page) {
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

async function getProduct(id) {
  try {
    const currentProduct = await Product.findOne({ _id: id });
    if (!currentProduct) {
      throw new Error("Продукт не найден");
    } else {
      return currentProduct;
    }
  } catch (error) {
    throw new Error("Нет такого продукта");
  }
}

export { addProduct, editProduct, deleteProduct, getProducts, getProduct };
