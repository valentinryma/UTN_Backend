/* Librerias: Jest
    npm i --save-dev jest
    npm i -g jest 
*/

// Importamos la función del el Controlador a Testear
const { getAllProductos, createProducto } = require('../../src/controllers/productosController');

// Importamos el Modelo -> Mockup: Simulacion de base de datos
const productModel = require('../../src/models/producto');

// Deinimos un Mockup
jest.mock('../../src/models/producto');


// Definimos un agrupador de pruebas unitarias
describe("Producto Controller", () => {
    // Limpia los Mockup
    afterEach(() => {
        // Cada vez que inicia el test elimina datos ficticios.
        jest.clearAllMocks();
    });

    //* Test: getAllProductos - Obtener Productos ----------- 01.
    test("getAllProductos debería obtener todos los productos", async () => {
        //? ---------- - - - - - - - Definicion del Test - - - - - - - - - ----------

        // Declaramos el Mockup de la base de datos (Siempre tiene que devolver esto.)
        const mockProductos = [
            // Lista de Prodcutos.
            { name: "Producto 1", price: 10 },
            { name: "Producto 2", price: 20 },
        ];

        // Le definimos un MockUp a la funcion find del modelo 
        // que utilizamos para acceder a la base de datos (Mongoose).
        // Luego le decimos que tiene que responder con la lista de productos definida anteriormente
        productModel.find.mockResolvedValue(mockProductos);

        // Simulamos los valores que deberian tener la solicitud y la respuesta.
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        //? ---------- - - - - - - - - - - - - - - - - - - - - - - - - - - ----------
        //Realizamos la ejecución de la funcion que estamos Testeando.  
        await getAllProductos(req, res);

        // Resultados Esperados
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockProductos);
        expect(productModel.find).toHaveBeenCalledTimes(1); // La funcion sea llamada SOLO una vez.
    });

    //* Test: getAllProductos - Manejo de Errores ----------- 02.
    test("getAllProductos debería manejar errores", async () => {
        const errorMessage = "Error al obtener los productos";

        // Le decimos que deberia responder con un Error y mensaje
        // en caso de que se rompa la conexion
        productModel.find.mockRejectedValue(new Error(errorMessage));

        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await getAllProductos(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
        expect(productModel.find).toHaveBeenCalledTimes(1);
    });

    //* Test: createProducto - Creacion de Productos ----------- 03.
    test("createProducto debería crear un nuevo producto", async () => {
        const mockProductoData = { name: "Nuevo Producto", price: 15 };
        const mockSavedProducto = { _id: '1', ...mockProductoData };

        productModel.create.mockResolvedValue(mockSavedProducto);

        const req = { body: mockProductoData };
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
        };

        await createProducto(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(mockSavedProducto);
        expect(productModel.create).toHaveBeenCalledTimes(1);
        expect(productModel.create).toHaveBeenCalledWith(mockProductoData);
    });
});