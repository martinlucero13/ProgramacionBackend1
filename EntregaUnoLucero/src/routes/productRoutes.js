import express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProductById
} from "../controllers/productController.js";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:pid", getProductById);
productRoutes.post("/", addProduct);
productRoutes.put("/:pid", updateProductById);
productRoutes.delete("/:pid", deleteProduct);

export default productRoutes;
