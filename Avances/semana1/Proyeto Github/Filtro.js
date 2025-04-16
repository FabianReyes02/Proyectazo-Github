// script.js document.getElementById("search").addEventListener("input", function() { let searchTerm = this.value.toLowerCase(); let gameCards = document.querySelectorAll(".game-card");

gameCards.forEach(function(card) {
    let gameName = card.querySelector("h3").textContent.toLowerCase();
    if (gameName.includes(searchTerm)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});
