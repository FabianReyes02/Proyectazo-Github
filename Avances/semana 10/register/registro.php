<?php
// Conexión con la base de datos
$conexion = new mysqli("localhost", "root", "", "usuariosDB");

// Revisar si hubo error
if ($conexion->connect_error) {
    die("Error en la conexión: " . $conexion->connect_error);
}

// Obtener los datos del formulario
$usuario = $_POST['usuarioRegistro'];
$correo = $_POST['correoRegistro'];
$contraseña = password_hash($_POST['contraseñaRegistro'], PASSWORD_DEFAULT); // Cifrar contraseña

// Insertar datos
$sql = "INSERT INTO usuarios (usuario, correo, contraseña) VALUES ('$usuario', '$correo', '$contraseña')";

if ($conexion->query($sql) === TRUE) {
    echo "Registro exitoso";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close();
?>
