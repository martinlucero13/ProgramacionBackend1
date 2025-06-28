import express from "express";
import ProductManager from "../models/productManager.js";

const productManager = new ProductManager("./src/products.json");

const viewsRouter = express.Router();

//Declaracion para hacer los html dinamicos y pasarles info
/*const products = [
    {
        id: 1,
        title: "Teclado Redragon",
        price: 5000,
        thumbnail: "/img/checo.jpg",
    },
    {
        id: 2,
        title: "Mouse Redragon",
        price: 3500,
        thumbnail: "/img/DarkVader.jpg",
    }
]*/
const user = { username: "MartinLucero", isAdmin: true};

const middlewareIsAdmin = (req, res, next) =>{
    if(user.isAdmin){ 
        next(); 
    }
    else{ 
        res.redirect("/error");
    }
}
//Declaracion de los endpoints
viewsRouter.get("/", async(req, res) => {
    try {
        

        const products = await productManager.getProducts();
        //Como queremos devolver una plantilla hacemos un res.render
        //Despues de la coma le mandamos informacion 
        res.render("home", {products, user});
    } catch (error) {
        res.render("error");
    }

});

viewsRouter.get("/contact", middlewareIsAdmin, (req, res) => {
    //Como queremos devolver una plantilla hacemos un res.render
    res.render("contact");
});


export default viewsRouter;