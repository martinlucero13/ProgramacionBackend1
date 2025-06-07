import fs from "fs";

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

    async addProduct(newProduct){
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);
            
            const newID = this.generateNewID(products);
            console.log(newID)
            const product = { id: newID, ...newProduct};

            products.push(product);

            //Guardamos en el archivo
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

    async deleteProductById(id) {
        try {
            const fileData = await fs.promises.readFile(this.pathFile, "utf-8");
            const products = JSON.parse(fileData);

            const filteredProducts = products.filter(product => product.id !== id);

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

        const index = products.findIndex(product => product.id === id);

        if (index === -1) {
            throw new Error(`Producto con ID ${id} no encontrado.`);
        }

        // Mantenemos el id original y actualizamos solo los campos indicados
        products[index] = { ...products[index], ...updatedFields, id };

        await fs.promises.writeFile(this.pathFile, JSON.stringify(products, null, 2), "utf-8");
        console.log(`Producto con ID ${id} actualizado correctamente.`);
    } catch (error) {
        throw new Error("Error al actualizar el producto: " + error.message);
    }
}
}

export default ProductManager


/*export class ProductManagerDos{

}*/