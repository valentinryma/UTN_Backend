const express = require('express');
const route = express.Router();

const ProductosController = require('../controllers/productosController');

// Verficiador de Scopes - JWT
const { requiredScopes } = require('express-oauth2-jwt-bearer');

// Obtener todos los Productos
route.get('/', requiredScopes("read:productos"), ProductosController.getAllProductos);

// Obtener un Producto por ID
route.get('/:id', requiredScopes("read:productos"), ProductosController.getProductoById);

// Crear un nuevo Producto
route.post('/', requiredScopes("write:productos"), ProductosController.createProducto);

// Actualizar un Producto
route.put('/:id', requiredScopes("write:productos"), ProductosController.updateProductoById);

// Eliminar un Producto
route.delete('/:id', requiredScopes("write:productos"), ProductosController.deleteProductoById);

module.exports = route;