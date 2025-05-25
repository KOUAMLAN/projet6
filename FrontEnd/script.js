// script.js

// Affiche un message dans la console pour vérifier que le JS est bien chargé
console.log("JS chargé !");

// Exemple : Afficher dynamiquement le nombre de projets dans la galerie
document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    if (gallery) {
        const nbProjets = gallery.querySelectorAll("figure").length;
        console.log(`Nombre de projets affichés : ${nbProjets}`);

        // Bonus : afficher ce nombre sur la page
        let h2 = document.querySelector("#portfolio h2");
        if (h2) {
            h2.textContent += ` (${nbProjets})`;
        }
    }
});

// Exemple : Ajout d'un effet au clic sur les images de la galerie
document.addEventListener("click", function(event) {
    if (event.target.closest(".gallery img")) {
        const img = event.target;
        alert(`Vous avez cliqué sur : ${img.alt}`);
    }
});
