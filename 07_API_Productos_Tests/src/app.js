const express = require('express');
const app = express();

// OAuth2
const { auth } = require('express-oauth2-jwt-bearer');

// Middleware: Verifica el JWT de la solicitud
const jwtCheck = auth({
    audience: 'http://localhost:3000/api/productos07',
    issuerBaseURL: 'https://dev-52wr4qnnrox45yl8.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});


// req.body ✔
app.use(express.json());

// Route Base
app.get('/', (req, res) => {
    res.send('API de Productos');
})

// Route Productos
const routeProductos = require('./routes/productos');
app.use('/api/productos07', jwtCheck, routeProductos);

// Middleware: ErrorHandler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Server ON
const PORT = process.env.PORT || 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
    console.log(`Server is running on http://${HOST}:${PORT}/`)
})

module.exports = app;