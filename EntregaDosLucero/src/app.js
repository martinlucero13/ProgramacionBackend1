import express from "express";
import http from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import viewsRouter from "./routes/views.router.js";
import ProductManager from "./models/productManager.js";
const productManager = new ProductManager("./src/products.json");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
//Configuracion de express para poder leer la carpeta public con archivs estaticos
app.use(express.static("public"))
//Linea para que me permita recupera informacion de un formulario
app.use(express.urlencoded({extended: true}));
//handlebars config, configuraciones para las plantillas html
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use(express.json());

//endpoints
app.use("/", viewsRouter);
//app.use("/realtimeproducts", viewsRouter);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use('/uploads', express.static('uploads'));


//websocket desde el servidor
io.on("connection", async (socket) => {
    console.log("nuevo usuario conectado");

    socket.on("getProducts", async () => {
        const products = await productManager.getProducts();
        socket.emit("updateProductList", products);
    });

    socket.on("addProduct", async (newProduct) => {
        await productManager.addProduct(newProduct);
        const products = await productManager.getProducts();
        io.emit("updateProductList", products);
    });

    socket.on("updateProduct", async (updatedProduct) => {
        await productManager.updateProductById(updatedProduct.id, updatedProduct);
        const products = await productManager.getProducts();
        io.emit("updateProductList", products);
    });

    socket.on("deleteProduct", async (productId) => {
        await productManager.deleteProductById(productId);
        const products = await productManager.getProducts();
        io.emit("updateProductList", products);
    });
});


server.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8080");
});