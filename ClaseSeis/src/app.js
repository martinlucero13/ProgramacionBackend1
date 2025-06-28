import express from "express";
import http from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";

const app = express();
const server = http.createServer(app)

//Configuramos el server para que acepte solicitudes websocket
//IO -> input output 
//LLamamos la variable server y la asignamos a io para poder utilisar socket
const io = new Server(server);

//Configuramos HandleBars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

//endpoints
app.use("/", viewsRouter)

//Persistencia de datos en memoria
const messages = [];

//websocket desde el servidor
io.on("connection", (socket) => {
    //Enviamos info desde el servidor al cliente
    socket.emit("welcome", { greeting: "Bienvenido a nuestro chat" });
    socket.emit("messages history", { messages });
    console.log("nuevo usuario conectado");
    //Id del cliente conectado
    //socket.id

    //Capturamos un evento
    //Lo resivimos en data
    socket.on("new message", (data) => {
        messages.push(data);

        //Enviamos a todos los clientes conectados
        io.emit("Broadcast new message", data);
        console.log(data);
    });
});


server.listen(8080, () => {
    console.log("Servidor iniciado en el puerto 8080");
});