const express = require('express');
const app = express();

const librosRouter = require('./routes/libros');

// Middleware Servidor de Autorización
const { auth } = require('express-oauth2-jwt-bearer');

const autenticacion = auth({
    audience: 'http://localhost:3000/api/libros',
    issuerBaseURL: 'https://dev-52wr4qnnrox45yl8.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

app.use(express.json());

// Ruta Báse
app.get('/', (req, res) => {
    res.send('API Libros - Segurdiad - MongoDB');
})

// Ruta API Libros
app.use('/api/libros', autenticacion, librosRouter);

// Middleware: ErrorHandler
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Server ON
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
