// js/modal.js

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".modal");
    const openBtn = document.querySelector(".open-modal");
    const closeBtn = document.querySelector(".close-modal");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Fermer la modale en cliquant en dehors
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
