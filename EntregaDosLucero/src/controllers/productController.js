import * as productService from "../services/productService.js";

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({ status: "success", products });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al obtener productos" });
  }
};

export const getProductById = async (req, res) => {
    try {
        const pid = req.params.pid;
        const product = await productService.getProductById(pid);
        res.status(200).json({ status: "success", product});
    } catch (error) {
        res.status(500).json({ status: "error", message: "Error al obtener un producto" });
    }
}

export const deleteProduct = async (req, res) => {
  try {
    const pid = req.params.pid;
    const result = await productService.deleteProductById(pid);
    res.status(200).json({ status: "success", result });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al eliminar el producto" });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { title, price } = req.body;
    const file = req.file;

    const newProduct = {
      title,
      price: parseFloat(price),
      description: "",
      code: "",
      status: true,
      stock: 0,
      category: "",
      thumbnails: file ? `/uploads/${file.filename}` : ""
    };

    const result = await productService.addProduct(newProduct);
    res.status(201).json({ status: "success", result });
  } catch (error) {
    console.error("Error en addProduct:", error);
    res.status(500).json({ status: "error", message: "Error al insertar el producto" });
  }
};


export const updateProductById = async (req, res) => {
  try {
    const pid = req.params.pid;
    const data = req.body;
    const result = await productService.updateProductById(pid, data);
    res.status(200).json({ status: "success", result });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Error al actualizar el producto" });
  }
};
