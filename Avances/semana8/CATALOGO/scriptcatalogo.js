// Insertar API KEY de consulta de steam

const apiKey = ''; // Asegúrate de agregar tu API Key aquí si es necesario
// IDs de juegos para consultar, se puede consultar en steamdb.info
const appIds = [440, 730, 3240220, 72850, 1888930, 570, 7940, 12110, 1196590, 578080, 1172470, 252490, 1790600, 3241660, 381210, 1174180, 108600, 227300, 1665460, 4000, 1091500, 322170, 2878980, 1190970, 2767030, 1086940, 2139460, 1364780, 1551360, 2379780, 304930, 39210];
const apiKey = '';
// IDs de juegos para consultar, se puede consultar en steamdb.info
const appIds = [440, 730, 3240220, 72850, 1888930, 570, 7940, 12110, 1196590, 578080, 1172470, 252490,1790600,3241660,381210,1174180,108600,227300,1665460,4000
,1091500,322170,2878980,1190970,2767030,1086940,2139460,1364780,1551360,2379780,304930,39210];

const gameGrid = document.getElementById('game-grid');

async function fetchGames() {
    try {
        const promises = appIds.map(function(appId) {
            return fetch('https://store.steampowered.com/api/appdetails?appids=' + appId)
                .then(function(response) {
                    if (!response.ok) {
                        throw new Error('Error en la solicitud: ' + response.status);
                    }
                    return response.json();
                });
        });
        const games = await Promise.all(promises);
        console.log('Datos de juegos recibidos:', games);
        displayGames(games);
    } catch (error) {
        console.error('Error al obtener los juegos:', error);
        gameGrid.innerHTML = '<p>Error al cargar los juegos. Por favor, intenta de nuevo más tarde.</p>';
    }
}

function displayGames(games) {
    games.forEach(function(game) {
        var key = Object.keys(game)[0];
        var gameData = game[key];

        if (gameData.success) {
            var data = gameData.data;
            var gameElement = document.createElement('div');
            gameElement.classList.add('game');

            var genres = data.genres ? data.genres.map(function(genre) {
                return genre.description;
            }).join(', ') : 'Sin géneros';

            var price = data.price_overview ? data.price_overview.final_formatted : (data.is_free ? 'Gratis' : 'No disponible');

            gameElement.innerHTML =
                '<img src="' + data.header_image + '" alt="' + data.name + '" />' +
                '<h3>' + data.name + '</h3>' +
                '<p>' + genres + '</p>' +
                '<p>Precio: ' + price + '</p>';

            gameGrid.appendChild(gameElement);
        } else {
            console.warn('No se pudo obtener datos para el juego con appid: ' + key);
        }
    });
}

fetchGames();

// Funcionalidad del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('active');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
    }
});
