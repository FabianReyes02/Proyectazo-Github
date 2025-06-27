<?php
session_start();

if (!isset($_SESSION['nombre_usuario'])) {
    header("Location: /Proyectazo-Github/Avances/semana 10/proyecto/inicio.html");
    exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>EstimInfo</title>
    <link rel="stylesheet" href="estilocatalogo.css" />
    <link rel="icon" href="fotos/logopequennio-removebg-preview.png" type="image/png" />
</head>
<body>
<header>
    <nav>
        <a href="#" class="logo-link" aria-label="Inicio">
            <img src="fotos/logopequennio-removebg-preview.png" alt="Logo de la aplicación" class="logo-img" />
        </a>

        <input id="search-input" type="text" placeholder="Buscar..." />

        <div class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" role="button" tabindex="0">
            <div></div>
            <div></div>
            <div></div>
        </div>

        <!-- Menú con items y filtro género -->
        <ul id="menu" class="menu">
            <li>
                <label for="genre-filter" style="color:#ccc; font-size: 0.9rem; display:block; margin-bottom: 4px;">Filtrar por género:</label>
                <select id="genre-filter">
                    <option value="all">Todos los géneros</option>
                    <!-- Opciones de géneros se agregan dinámicamente -->
                </select>
            </li>
            <li class="user-info-mobile">
                <span><?php echo htmlspecialchars($_SESSION['nombre_usuario']); ?></span>
                <img src="img/default.png" alt="Perfil" />
            </li>
        </ul>
    
        <div class="user-info-desktop">
            <span><?php echo htmlspecialchars($_SESSION['nombre_usuario']); ?></span>
            <img src="img/default.png" alt="Perfil" />
        </div>
    </nav>
</header>
<main>
    <div class="game-grid" id="game-grid">
        <!-- Los juegos se agregarán aquí -->
    </div>
    <div id="pagination" class="pagination-container"></div>
</main>

<script src="scriptcatalogo.js"></script>
</body>
</html>
