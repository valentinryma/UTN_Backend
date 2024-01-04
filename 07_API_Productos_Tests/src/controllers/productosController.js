const Producto = require('../models/producto');

// Obtener todos los Productos
exports.getAllProductos = async (req, res) => {
    try {
        const products = await Producto.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

// Obtener un Producto por ID
exports.getProductoById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Producto.findById(id);

        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" })
        }
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" })
    }
};

// Crear un nuevo Produco
exports.createProducto = async (req, res) => {
    try {
        const data = req.body;
        const newProducto = await Producto.create(data);
        res.status(201).json(newProducto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el producto" });
    }
};

// Eliminar un Producto por ID
exports.deleteProductoById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProducto = await Producto.findByIdAndDelete(id);

        if (!deletedProducto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(deletedProducto);

    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el producto" });
    }
}

// Actualizar un Producto por ID
exports.updateProductoById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const updateProducto = await Producto.findByIdAndUpdate(id, data, { new: true });

        if (!updateProducto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(updateProducto);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
}