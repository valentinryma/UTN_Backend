const express = require('express');
const router = express.Router();
const Libro = require('../models/libro');
const { requiredScopes } = require('express-oauth2-jwt-bearer');

// Ruta: Obtener libros [GET]
router.get('/', requiredScopes("read:libros"), async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los libro" })
    }
})

// Ruta: Crear nuevo libro [POST]
router.post('/', requiredScopes("write:libros"), async (req, res) => {
    try {
        const nuevoLibro = new Libro(req.body);
        await nuevoLibro.save();
        res.json(nuevoLibro);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el libro" });
    }
})

// Ruta: Actualizar libro [PUT]
router.put("/:id", async (req, res) => {
    try {
        const actualizadoLibro = await Libro.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
            });
        res.json(actualizadoLibro);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el Libro" });
    }
});

// Ruta: Eliminar libro [DELETE]
router.delete('/:id', requiredScopes("write:libros"), async (req, res) => {
    const id = req.params.id;
    try {
        await Libro.findByIdAndDelete(id);
        res.json({ message: "Libro eliminado correctamente" })
    } catch (err) {
        res.status(500).json({ error: "Error al eliminar el libro" });
    }
})

module.exports = router;