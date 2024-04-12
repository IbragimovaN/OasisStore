import express from "express";
import {
  getProduct,
  getProducts,
  addProduct,
  editProduct,
  deleteProduct,
} from "../controllers/product-controller.js";
import authenticated from "../middelwares/authenticated.js";
import hasRole from "../middelwares/hasRole.js";
import mapProduct from "../halpers/mapProduct.js";
import ROLES from "../constants/roles.js";

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const { products, lastPage } = await getProducts(
    req.query.search,
    req.query.limit,
    req.query.page
  );

  res.send({ data: { lastPage, products: products.map(mapProduct) } });
});

router.get("/:id", async (req, res) => {
  const product = await getProduct(req.params.id);

  res.send({ data: mapProduct(product) });
});
router.post("/", authenticated, hasRole([ROLES.ADMIN]), async (req, res) => {
  try {
    const newProduct = await addProduct({
      title: req.body.title,
      image_url: req.body.imgUrl,
      brand: req.body.brand,
      category: req.body.category,
      age: req.body.age,
      price: req.body.price,
      rating: req.body.rating,
      description: req.body.description,
      hair_type: req.body.hairType,
    });
    res.send({ data: mapProduct(newProduct) });
  } catch (e) {
    res.send({ error: e.message || "Неизвестная ошибка" });
  }
});

router.patch(
  "/:id",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    const updatedProduct = await editProduct(req.params.id, {
      title: req.body.title,
      image_url: req.body.imgUrl,
      brand: req.body.brand,
      category: req.body.category,
      age: req.body.age,
      price: req.body.price,
      rating: req.body.rating,
      description: req.body.description,
      hair_type: req.body.hairType,
    });

    res.send({ data: mapProduct(updatedProduct) });
  }
);

router.delete(
  "/:id",
  authenticated,
  hasRole([ROLES.ADMIN]),
  async (req, res) => {
    await deleteProduct(req.params.id);

    res.send({ error: null });
  }
);

export default router;
