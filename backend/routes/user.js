import express from "express";
import User from "../models/user-model.js";
import hasRole from "../middelwares/hasRole.js";
import authenticated from "../middelwares/authenticated.js";
import {
  addFavouriteProduct,
  deleteFavouriteProduct,
} from "../controllers/user-controller.js";
import mapProduct from "../halpers/mapProduct.js";

const router = express.Router({ mergeParams: true });

router.get(
  "/:id",
  authenticated,

  async (req, res) => {
    try {
      let user = await User.findOne({ _id: req.params.id });
      user = await user.populate({
        path: "favourites",
      });

      user.favourites
        ? res.send({ data: user.favourites.map(mapProduct) })
        : "";
    } catch (e) {
      res.send({ error: e.message || "Не известная ошибка" });
    }
  }
);

router.patch(
  "/:id",
  authenticated,

  async (req, res) => {
    try {
      const user = await addFavouriteProduct(req.body.productId, req.params.id);
      res.send({ data: user });
    } catch (e) {
      res.send({ error: e.message || "Не известная ошибка" });
    }
  }
);

router.delete(
  "/:id",
  authenticated,

  async (req, res) => {
    try {
      await deleteFavouriteProduct(req.body.productId, req.params.id);
      res.send({ error: null });
    } catch (e) {
      res.send({ error: e.message || "Не известная ошибка" });
    }
  }
);

export default router;
