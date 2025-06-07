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
}

export default ProductManager


/*export class ProductManagerDos{

}*/