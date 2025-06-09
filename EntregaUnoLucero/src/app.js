import express from "express";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8080");
});