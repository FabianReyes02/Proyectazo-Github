<?php
session_start();
header('Content-Type: text/plain');

$conexion = new mysqli("localhost", "root", "", "usuariosdb");
if ($conexion->connect_error) die("Error de conexión");

$usuario = $_POST['usuario'] ?? '';
$contraseña = $_POST['contraseña'] ?? '';

$sql = "SELECT usuario, contraseña FROM usuarios WHERE usuario = ? OR correo = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $usuario, $usuario);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    if (password_verify($contraseña, $fila['contraseña'])) {
        $_SESSION['nombre_usuario'] = $fila['usuario'];
        echo "exito";
    } else {
        echo "contraseña_incorrecta";
    }
} else {
    echo "usuario_no_encontrado";
}

$stmt->close();
$conexion->close();
?>