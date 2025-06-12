import * as cartService from "../services/cartService.js";

export const getCarts = async (req, res) =>{
    try {
        const carritos = await cartService.getCarts();
        res.status(200).json({ status: "success", carritos });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Error al obtener carrito" });
    }
};

export const createCart = async (req, res) => {
  try {
    const result = await cartService.createCart();
    res.status(201).json({ status: "success", result });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al crear carrito" });
  }
};


export const getCartById = async (req, res) => {
  try {
    const cid = req.params.cid;
    const cart = await cartService.getCartById(cid);
    res.status(200).json({ status: "success", cart });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al obtener carrito por id"});
  }
};

export const addProductToCart = async (req, res) =>{
  try {
    const cid = req.params.cid;
    const pid = req.params.pid;
    const data = req.body;
    const result = await cartService.addProductToCart(cid, pid, data);
    res.status(201).json({ status: "success", result });
  } catch (error) {
    res.status(500).json({ status: "error", message: `Error al guardar el producto en el carrito`});
  }
};