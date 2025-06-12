import express from "express";
import {
  getCarts,
  createCart,
  getCartById,
  addProductToCart
} from "../controllers/cartController.js";

const cartRoutes = express.Router();

cartRoutes.get("/", getCarts);
cartRoutes.post("/", createCart);
cartRoutes.get("/:cid", getCartById);
cartRoutes.put("/:cid/:pid", addProductToCart);

export default cartRoutes;
