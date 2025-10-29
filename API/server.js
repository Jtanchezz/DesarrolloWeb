const express = require('express'); // Importa Express para construir el servidor HTTP.
const app = express(); // Inicializa la aplicación de Express.
const PORT = 3000; // Define el puerto donde escuchará la API.

app.get('/', (req, res) => { // Declara una ruta GET para la raíz.
  res.send('¡Hola, mundo de mi API!'); // Envía un mensaje simple al cliente.
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`); // Notifica en consola que el servidor está activo.
});
