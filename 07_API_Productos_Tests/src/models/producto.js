const mongoose = require('mongoose');

// DB Config
const server = '127.0.0.1:27017';
const database = 'productos07';

mongoose.connect(`mongodb://${server}/${database}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

// Schema
const productosSchema = new mongoose.Schema({
    name: String,
    precio: Number
})

// Model
const Producto = mongoose.model("Producto", productosSchema);

module.exports = Producto;