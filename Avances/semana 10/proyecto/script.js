function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores de usuario y contraseña
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Usuario y contraseña predefinidos
    const usuarioValido = "Proyectazo";
    const contraseñaValida = "1234";

    // Validar las credenciales
    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        alert("Inicio de sesión exitoso!");
       
        // Redirección al principal
        window.location.href = "/Proyectazo-Github/Avances/semana8/CATALOGO/catalogo.html";
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
}
