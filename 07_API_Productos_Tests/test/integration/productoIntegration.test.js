/* Librerias:
    npm i supertest
*/

// En este tipo de pruebas (De Integración) efectivamente estamos EJECUTANDO la API

const request = require('supertest');
const app = require('../../src/app');

const API_DOMAIN = '/api/productos07'

//* Test: Obtener lista de Productos ----------- 01.
test("Obtener lista de productos", async () => {
    const response = await request(app).get(API_DOMAIN);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(3);
});

//* Test: Crear un nuevo Producto ----------- 02.
test("Crear un nuevo producto", async () => {
    const nuevoProducto = { name: "Producto X", price: 10 };
    const respnse = await request(app)
        .post(API_DOMAIN)
        .send(nuevoProducto);

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Producto X');
    expect(response.body.price).toBe("10");
})

// Daran error ya que no esta implementada la validacion del TOKEN.