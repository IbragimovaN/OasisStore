import express from "express";
import authRoutes from "./auth.js";
import productRoutes from "./products.js";
import userRoutes from "./user.js";

const router = express.Router({ mergeParams: true });

router.use("/", authRoutes);
router.use("/products", productRoutes);
router.use("/user", userRoutes);

export default router;
