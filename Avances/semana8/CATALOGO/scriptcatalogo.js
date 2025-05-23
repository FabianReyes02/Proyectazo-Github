const apiKey = ''; // Asegúrate de agregar tu API Key aquí si es necesario


const appIds = [440, 730, 3240220, 72850, 1888930, 570, 7940,
     12110, 1196590, 578080, 1172470, 252490, 1790600, 3241660,
      381210, 1174180, 108600, 227300, 1665460, 4000, 1091500, 
      322170, 2878980, 1190970, 2767030, 1086940, 2139460, 1364780,
       1551360, 2379780, 304930, 39210,2531310,2669320,2050650,550,500,553850,413150,
    2300320,218620,264710,250900,1222140,284160,570940,976310,1593500,2651280,391540,
    620,2420110,2208920,360430,1811260,1506830,815370,47890,1601580,508440,1817070,
    286690,1938090,359550,2252570,3164500,1222670,2357570,289070,105600,1203220,
    1874880,322330,346110,427520,377160,2456740,2215430,1426210,1290000,631510,
    2567870,359870,883710,629760,1030830,1922560,2369390,225540,2668510,516750,
    2881650,1846380,20900,934700,2073850,292030,8930,306130,291550,2399830,813780,
    3017860,1782210,892970,251570,1245620,2623190,236390,1903340,3419430,2625420,
    1962700,233860,2001120,2138720,2400430,2427410,2358720,1941540,1285190,1313140,
    275850,3159330,782330,2075800,1229490,1144200,1203190,2073620,1426210,949230,
    1237950,268910,2943650,255710,1326470,2709570,379720,270880,3059520,813780,
    2406770,648800,1238810,739630,2138710,2322010,1238840,2215390];

const gameGrid = document.getElementById('game-grid');
const genreFilter = document.getElementById("genre-filter");
const searchInput = document.getElementById("search-input");
let allGames = []; // Para almacenar todos los juegos

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
        allGames = games; // Guardar todos los juegos
        displayGames(allGames); // Mostrar todos los juegos inicialmente
        populateGenreFilter(allGames); // Llenar el filtro de géneros
    } catch (error) {
        console.error('Error al obtener los juegos:', error);
        gameGrid.innerHTML = '<p>Error al cargar los juegos. Por favor, intenta de nuevo más tarde.</p>';
    }
}


function populateGenreFilter(games) {
    const genreSet = new Set();

//
function displayGames(games) {

    games.forEach(function(game) {
        var key = Object.keys(game)[0];
        var gameData = game[key];

        if (gameData.success) {
            var data = gameData.data;
            if (data.genres) {
                data.genres.forEach(function(genre) {
                    genreSet.add(genre.description);
                });
            }
        }
    });
}
    genreSet.forEach(function(genre) {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}

function displayGames(games, genreFilterValue = "all", searchText = "") {
    gameGrid.innerHTML = ""; // Limpiar contenedor

    searchText = searchText.trim().toLowerCase();

    const filteredGames = games.filter(game => {
        var key = Object.keys(game)[0];
        var gameData = game[key];

        if (!gameData.success) return false;

        const gameInfo = gameData.data;

        // Filtrar por género
        const genreMatch = genreFilterValue === "all" || gameInfo.genres.some(g => g.description === genreFilterValue);

        // Filtrar por texto (nombre del juego)
        const nameMatch = gameInfo.name.toLowerCase().includes(searchText);

        return genreMatch && nameMatch;
    });

    if (filteredGames.length === 0) {
        gameGrid.innerHTML = "<p>No se encontraron juegos que coincidan con los filtros.</p>";
        return;
    }

    filteredGames.forEach(game => {
        var key = Object.keys(game)[0];
        var gameData = game[key];
        var data = gameData.data;

        var gameElement = document.createElement('div');
        gameElement.classList.add('game');

        var genres = data.genres ? data.genres.map(genre => genre.description).join(', ') : 'Sin géneros';

        var price = data.price_overview ? data.price_overview.final_formatted : (data.is_free ? 'Gratis' : 'No disponible');

        gameElement.innerHTML = `
    <a href="juego.html?appId=${data.steam_appid}" class="game-link">
        <img src="${data.header_image}" alt="${data.name}" />
        <h3>${data.name}</h3>
        <p>${genres}</p>
        <p>Precio: ${price}</p>
    </a>
`;


        gameGrid.appendChild(gameElement);
    });
}

function updateDisplay() {
    const selectedGenre = genreFilter.value;
    const searchText = searchInput.value;
    displayGames(allGames, selectedGenre, searchText);
}

fetchGames();

genreFilter.addEventListener("change", updateDisplay);
searchInput.addEventListener("input", updateDisplay);

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
