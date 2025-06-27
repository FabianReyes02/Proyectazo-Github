const params = new URLSearchParams(window.location.search);
const appId = params.get("appId");
const container = document.getElementById("game-details");

if (appId) {
    fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`)
        .then(res => res.json())
        .then(data => {
            const gameData = data[appId];
            if (gameData.success) {
                const info = gameData.data;

           const price = info.price_overview
       ? `<span class="price">${info.price_overview.final_formatted}</span>`
       : (info.is_free ? '<span class="price">Gratis</span>' : '<span class="price">No disponible</span>');
   

                const genres = info.genres ? info.genres.map(g => g.description).join(", ") : "Sin género";
                const metacritic = info.metacritic ? info.metacritic.score : null;
                const developer = info.developers ? info.developers.join(", ") : "Desconocido";
                const releaseDate = info.release_date?.date || "No disponible";
                const requirements = info.pc_requirements?.minimum || "Requisitos mínimos no disponibles";
                const screenshots = info.screenshots || [];

                let screenshotsHtml = "";

                if (screenshots.length > 0) {
                    screenshotsHtml += `
                        <div class="screenshot-container">
                            <div class="screenshot-title">Capturas de pantalla:</div>
                            <div class="screenshot-slider" id="screenshot-slider">`;
                    
                    screenshots.forEach(ss => {
                        screenshotsHtml += `
                            <img src="${ss.path_full}" alt="Screenshot del juego" loading="lazy" />`;
                    });
                    
                    screenshotsHtml += `
                            </div>
                            <div class="screenshot-nav">
                                <button id="screenshot-prev">❮</button>
                                <button id="screenshot-next">❯</button>
                            </div>
                        </div>`;
                }

                container.innerHTML = `
  <div class="left">
    <img class="game-image" src="${info.header_image}" alt="${info.name}" />
    ${screenshotsHtml}
  </div>
  <div class="right">
    <h1>${info.name}</h1>
    <p class="description">${info.short_description}</p>
    <p class="info-item"><i class="fas fa-money-bill-wave"></i> ${price}</p>
    ${metacritic ? `<p class="info-item"><i class="fas fa-star"></i> ${metacritic}</p>` : ""}
    <p class="info-item"><i class="fas fa-tags"></i> ${genres}</p>
    <p class="info-item"><i class="fas fa-code"></i> ${developer}</p>
    <p class="info-item"><i class="fas fa-calendar-alt"></i> ${releaseDate}</p>
    <p class="info-item"><i class="fas fa-laptop-code"></i><br><span style="white-space: pre-line;">${requirements}</span></p>
    <a class="back-link" href="catalogo.php"><i class="fas fa-arrow-left"></i> Volver al catálogo</a>
  </div>
                
`;


                // Añadir funcionalidad al slider
                if (screenshots.length > 0) {
                    const slider = document.getElementById('screenshot-slider');
                    const prevBtn = document.getElementById('screenshot-prev');
                    const nextBtn = document.getElementById('screenshot-next');
                    
                    nextBtn.addEventListener('click', () => {
                        slider.scrollBy({ left: 300, behavior: 'smooth' });
                    });
                    
                    prevBtn.addEventListener('click', () => {
                        slider.scrollBy({ left: -300, behavior: 'smooth' });
                    });
                    
                    // Hacer las imágenes clickables para ver en tamaño completo
                    const screenshotImages = slider.querySelectorAll('img');
                    screenshotImages.forEach(img => {
                        img.addEventListener('click', () => {
                            window.open(img.src, '_blank');
                        });
                    });
                }
            } else {
                container.innerHTML = "<p>Error al cargar los detalles del juego.</p>";
            }
        })
        .catch(err => {
            console.error(err);
            container.innerHTML = "<p>Error al obtener los datos del juego.</p>";
        });
} else {
    container.innerHTML = "<p>No se proporcionó un appId válido.</p>";
}