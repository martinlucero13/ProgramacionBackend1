import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import productsRouter from "./routes/products.router.js";

const app = express();

//Configuracion de express para poder leer la carpeta public con archivs estaticos
app.use(express.static("public"))
//Linea para que me permita recupera informacion de un formulario
app.use(express.urlencoded({extended: true}));

//handlebars config
//son las configuraciones para las plantillas html
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");


//endpoints
app.use("/", viewsRouter);
app.use("/api/products", productsRouter);


app.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8080");
});