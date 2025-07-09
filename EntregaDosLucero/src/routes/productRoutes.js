import express from "express";
import multer from "multer";
import {
  getProducts,
  getProductById,
  deleteProduct,
  addProduct,
  updateProductById
} from "../controllers/productController.js";

const productRoutes = express.Router();

// Configuración de multer para subir archivos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Asegurate de que la carpeta exista
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage });

productRoutes.post("/", upload.single("file"), addProduct);

productRoutes.get("/", getProducts);
productRoutes.get("/:pid", getProductById);
productRoutes.put("/:pid", updateProductById);
productRoutes.delete("/:pid", deleteProduct);

export default productRoutes;
