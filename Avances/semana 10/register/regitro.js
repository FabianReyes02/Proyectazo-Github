function validarRegistro(event) {
    event.preventDefault(); // Previene el envío por defecto del formulario

    const form = document.getElementById('RegisterForm');
    const datos = new FormData(form);

    const contraseña = datos.get('contraseñaRegistro');
    const confirmar = datos.get('confirmaContraseñaRegistro');

    if (contraseña !== confirmar) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    fetch('registro.php', {
        method: 'POST',
        body: datos
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        if (data.includes("exitoso")) {
            window.location.href = "http://localhost/Proyectazo-Github/Avances/semana 10/proyecto/inicio.html";
;
        }
    })
    .catch(error => {
        console.error("Error al registrar:", error);
        alert("Hubo un error al registrar.");
    });

    return false;
}
if (data.includes("exitoso")) {
    alert("Registro exitoso. Redirigiendo...");
    window.location.href = "http://localhost/Proyectazo-Github/Avances/semana 10/proyecto/inicio.html";

}
