
const mysql = require('mysql2');

// Crear la configuración de la conexión
const connection = mysql.createConnection({
  host: 'localhost', // 
  user: 'root', //  nombre de usuario de MySQL
  password: 'duoc', //  contraseña de MySQL
  database: 'EstimInfoUsuarios' // nombre de tu base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.message);
  }
  console.log('Conectado a la base de datos MySQL.');
//
  // Consulta de ejemplo
  connection.query('SELECT NOW() AS currentTime', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err.message);
    } else {
      console.log('Resultado de la consulta:', results[0].currentTime);
    }
    // Cerrar la conexión
    connection.end();
  });
});
