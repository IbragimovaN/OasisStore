import express from "express";
import authRoutes from "./auth.js";
import productRoutes from "./products.js";

const router = express.Router({ mergeParams: true });

router.use("/", authRoutes);
router.use("/products", productRoutes);

export default router;
