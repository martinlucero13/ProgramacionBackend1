import fs from 'fs';
import Cart from './cart.js';
import ProductManager from './productManager.js';

export default class CartManager {
    productManager
    constructor(cartPath) {
        this.cartPath = cartPath;
        this.productManager = new ProductManager("./src/products.json");
    }

    async generateNewID(carts) {
        if (carts.length > 0) {
            return carts[carts.length - 1].id + 1;
        } else {
            return 1;
        }
    }

    async getCarts() {
        try {
            const data = await fs.promises.readFile(this.cartPath, 'utf-8');
            return JSON.parse(data);
        } catch {
            return [];
        }
    }

    async saveCarts(carts) {
        await fs.promises.writeFile(this.cartPath, JSON.stringify(carts, null, 2), 'utf-8');
    }

    async createCart() {
        const carts = await this.getCarts();
        const newId = await this.generateNewID(carts);
        const newCart = new Cart(newId, []);
        carts.push(newCart);
        await this.saveCarts(carts);
        return newCart;
    }

    async getCartById(cid) {
        const carts = await this.getCarts();
        return carts.find(cart => cart.id === Number(cid));
    }

    async addProductToCart(cid, pid, data) {
        const carts = await this.getCarts();
        const cartIndex = carts.findIndex(c => c.id === Number(cid));
        if (cartIndex === -1) throw new Error("Carrito no encontrado");

        const cart = carts[cartIndex];

        // Validamos si el producto existe
        const product = await this.productManager.getProductById(pid);
        if (!product) throw new Error("Producto no encontrado");

        const existingProduct = cart.products.find(p => p.product === pid);

        if (existingProduct) {
            existingProduct.quantity += data.quantity;
        } else {
            cart.products.push({ product: pid, quantity: data.quantity });
        }

        carts[cartIndex] = cart;
        await this.saveCarts(carts);
        return cart;
    }
}
