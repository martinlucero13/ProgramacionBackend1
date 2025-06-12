import CartManager from "../models/cartManager.js";

const cartManager = new CartManager("./src/carts.json");

export const getCarts = () => cartManager.getCarts();
export const createCart = () => cartManager.createCart();
export const getCartById = (cid) => cartManager.getCartById(cid);
export const addProductToCart = (cid, pid, data) => cartManager.addProductToCart(cid, pid, data);