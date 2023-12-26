const { number } = require('joi');
const mongoose = require('mongoose');

const sv = 'localhost';
const db = 'libros';

// Conexión con la base de datos.
mongoose.connect(`mongodb://${sv}/${db}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

// Esquema
const librosSchema = new mongoose.Schema({
    titulo: String,
    autor: String
}, { collection: 'libros' });

// Modelo
const Libro = mongoose.model('Libro', librosSchema);

module.exports = Libro;

