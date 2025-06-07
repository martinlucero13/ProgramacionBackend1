import express from "express";
import ProductManager from "./productManager.js";


const app = express();

//Habilitamos que se puedan manejar y recibir los json 
app.use(express.json());
const productManager = new ProductManager("./src/products.json")

//rutas o endpoints
//declaramos con el app. y el metodo que vamos a utilizar (get put post delete)
app.get("/", (req, res) => {
    res.json({ menssage: "Hola Mundo"});
});

app.get("/api/getmenssage", (req, res) => {
    res.json({ menssage: "hola soy mensaje"});
});

app.get("/api/products", async(req, res) => {
    try {
        const products = await productManager.getProducts();
        res.status(200).json({status: "success", products})
    } catch (error) {
        res.status(500).json({status: "error", menssage: "Error al obtener productos"})
    }
});

app.delete("api/products/:pid", async(req, res) =>{
    try {
        const pid = req.params.pid;
        const product = await productManager.deleteProductById(pid);
        res.status(200).json({status: "success", product})
    } catch (error) {
        res.status(500).json({status: "error", menssage: "Error al eliminar el producto"})
    }
});

app.post("/api/products", async(req,res) =>{
    try {
        const newProduct = req.body;
        const products = await productManager.addProduct(newProduct);
        res.status(201).json({status: "success", products})
    } catch (error) {
        res.status(500).json({status: "error", menssage: "Error al insertar el producto"})
    }
});

app.put("/api/products/:pid", async(req,res) =>{
    try {
        const pid = req.params.pid;
        const updateData = req.body;

        const products = await productManager.updateProductById(pid,updateData)
        res.status(200).json({status: "success", products})
    } catch (error) {
        res.json({status: "error", menssage: "Error al updatear el producto"})
    }
});

app.listen(8080, () =>{
    console.log("Servidor iniciado en el puerto 8080");
});