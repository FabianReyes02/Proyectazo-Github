function validarLogin(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtener los valores de usuario y contraseña
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value;

    // Usuario y contraseña predefinidos
    const usuarioValido = "1234";
    const contraseñaValida = "1234";

    // Validar las credenciales
    if (usuario === usuarioValido && contraseña === contraseñaValida) {
        alert("Se ha registrado de manera exitosa");
        //redireccion al principal
        window.location.href = "principal.html";
    } else {
        alert("Complete todos los campos por favor");
    }
}