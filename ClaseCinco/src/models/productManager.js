import fs from "fs";
import Product from "./Product.js";

class ProductManager{
    constructor(pathFile){
        this.pathFile = pathFile;
    }

    generateNewID(products){
        if(products.length > 0){
            return products[ products.length -1].id + 1;
        }else{
            return 1;
        }
    }

    async addProduct(newProductData){
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            
            const newID = this.generateNewID(products);
            
            const product = new Product(
                newID,
                newProductData.title,
                newProductData.description,
                newProductData.code,
                newProductData.price,
                newProductData.status,
                newProductData.stock,
                newProductData.category,
                newProductData.thumbnails
            );

            products.push(product);

            await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2), "utf-8");
        } catch (error) {
            throw new Error("Error al añadir un nuevo producto", error);
        }
    }

    async getProducts(){
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            return products;
        } catch (error) {
             throw new Error("Error al obtener productos", error);
        }
    }

    async getProductById(id){
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);

            const index = products.findIndex(product => product.id === Number(id));
            
            return products[index];
        } catch (error) {
            throw new Error("Error al obtener el producto", error)
        }
    }

    async deleteProductById(id) {
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);

            const filteredProducts = products.filter(product => product.id !== Number(id));

            if (products.length === filteredProducts.length) {
                throw new Error(`Producto con ID ${id} no encontrado.`);
            }

            await fs.promises.writeFile(this.pathFile, JSON.stringify(filteredProducts, null, 2), "utf-8");
            console.log(`Producto con ID ${id} eliminado correctamente.`);
        } catch (error) {
            throw new Error("Error al eliminar el producto: " + error.message);
        }
    }

    async updateProductById(id, updatedFields) {
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);

            const index = products.findIndex(product => product.id === Number(id));

            if (index === -1) {
                throw new Error(`Producto con ID ${id} no encontrado.`);
            }

            const existingProduct = products[index];

            const updatedProduct = new Product(
                Number(id),
                updatedFields.title || existingProduct.title,
                updatedFields.description || existingProduct.description,
                updatedFields.code || existingProduct.code,
                updatedFields.price !== undefined ? updatedFields.price : existingProduct.price,
                updatedFields.status !== undefined ? updatedFields.status : existingProduct.status,
                updatedFields.stock !== undefined ? updatedFields.stock : existingProduct.stock,
                updatedFields.category || existingProduct.category,
                updatedFields.thumbnails || existingProduct.thumbnails
            );

            products[index] = updatedProduct;

            await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2), "utf-8");
            console.log(`Producto con ID ${id} actualizado correctamente.`);
        } catch (error) {
            throw new Error("Error al actualizar el producto: " + error.message);
        }
    }
}

export default ProductManager