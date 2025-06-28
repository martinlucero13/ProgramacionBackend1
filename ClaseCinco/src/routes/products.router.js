import expres from "express";
import ProductManager from "../models/productManager.js";
//importamos el midelware de multer que creamos para la carga de archivos
import uploader from "../utils/uploaders.js";


const productManager = new ProductManager("./src/products.json");

const productsRouter = expres.Router();

productsRouter.post("/", uploader.single("file"), async(req, res) => {
    try {
        const title = req.body.title;
        const price = req.body.price;
        const thumbnail = "/img/" + req.file.filename;   
        await productManager.addProduct({ title, price, thumbnail});
        res.redirect("/");
    } catch (error) {
        res.status(500).json({ status: "error", message: "No se puedo agregar el producto"})
    }
});

export default productsRouter;