import ProductManager from "../models/productManager.js";

const productManager = new ProductManager("./src/products.json");

export const getProducts = () => productManager.getProducts();
export const getProductById = (pid) => productManager.getProductById(pid);
export const deleteProductById = (pid) => productManager.deleteProductById(pid);
export const addProduct = (product) => productManager.addProduct(product);
export const updateProductById = (pid, data) => productManager.updateProductById(pid, data);
