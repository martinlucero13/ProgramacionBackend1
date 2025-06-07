//import { title } from "process";
import ProductManager from "./productManager.js";
//import { ProductManagerDos } from "./productManager";

const main = async() =>{
    try {
        const productManager = new ProductManager("./products.json");

        await productManager.addProduct({title: "Buzo Puma", desciption: "Buzo piola"});
        console.log(await productManager.getProducts());
    } catch (error) {
        console.log(error)
    }
}

main();