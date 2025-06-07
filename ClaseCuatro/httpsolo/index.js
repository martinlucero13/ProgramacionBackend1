import http from "http"
//Request captura la informacion del fron y response nos da la respuesta a la solicitud
const server = http.createServer((request, response) =>{
    response.setHeader("Content-Type", "text/plain");

    if(request.method === "GET" && request.url === "/"){
        response.end("Hola Mundo!");
    }
});

//Pasamos el nro de puerto y una funcion de callback
server.listen(8080, () =>{
    console.log("Servidor iniciado en el puerto 8080")
});