-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2025 a las 00:31:45
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `usuariosdb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `correo`, `contraseña`) VALUES
(45, 'prueba1', 'prueba1@gmail.com', '$2y$10$c6RXIz4SMNyS4iLgdkmO6OB9ptJprq.w3qSwWgVj9o8qvb.aExXJO'),
(46, 'prueba2', 'prueba.2@gmail.com', '$2y$10$s7yoxPScfzJEFax1/Pr.x.OGRDLHdnUPx.Syt7yczALlxkirqrSmG'),
(47, 'marcelo.crisostomo', 'marcelo@gmail.com', '$2y$10$sRZ0lPJxq9gYTaQLeg0jduPWPzHijK0w5.oy6Rm4SjzcWUGY4WIMq'),
(48, 'fabian.reyes', 'fabian@gmail.com', '$2y$10$Ya3NhojluY/FOm0xJHZnY.WqnCvmJ6yD8Vepw2yx.osxMWWiAEhou'),
(49, 'martin.rivas', 'martin@gmail.com', '$2y$10$E1G8tIe.vWGBfrnivMfeLuDqYg72VKAaPrVU7UZK5zZRP7ppUGQqi'),
(50, 'matias.vargas', 'matias@gmail.com', '$2y$10$c91abeUOL1DOg2u2M9SfH.Ee9tmc7MteHtm7UnVBBCo22dBKVJ3Ui'),
(51, 'thomas.martinez', 'thomas@gmail.com', '$2y$10$/9UJKvxeJCCvZcHvQbs5KOnguxq3AxU4SsweHjfnQ1vqGdZ43mL4i');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
