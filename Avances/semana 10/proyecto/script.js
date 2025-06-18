document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const mensaje = document.getElementById("mensaje");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        const datos = new FormData(form);

        // Verifica que los datos se están capturando correctamente
        console.log("Datos del formulario:", {
            usuario: datos.get("usuario"),
            contraseña: datos.get("contraseña")
        });

        fetch("login.php", {
            method: "POST",
            body: datos
        })
        .then(res => {
            if (!res.ok) throw new Error("Error en la petición");
            return res.text();
        })
        .then(data => {
            console.log("Respuesta del servidor:", data); // Depuración
            if (data.trim() === "exito") {
                mensaje.textContent = "✅ Inicio de sesión exitoso. Redirigiendo...";
                mensaje.style.color = "green";
                setTimeout(() => {
                    window.location.href = "/Proyectazo-Github/Avances/semana 10/CATALOGO/catalogo.php";
                }, 1500);
            } else {
                let errorMsg = "❌ Error desconocido";
                if (data === "contraseña_incorrecta") errorMsg = "Contraseña incorrecta";
                if (data === "usuario_no_encontrado") errorMsg = "Usuario no encontrado";
                mensaje.textContent = errorMsg;
                mensaje.style.color = "red";
            }
        })
        .catch(error => {
            console.error("Error en fetch:", error);
            mensaje.textContent = "❌ Error de conexión: " + error.message;
            mensaje.style.color = "red";
        });
    });
});