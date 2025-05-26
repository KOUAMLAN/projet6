// js/app.js

import { fetchWorks, fetchCategories } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const works = await fetchWorks();
        displayWorks(works);

        const categories = await fetchCategories();
        displayCategories(categories, works);
    } catch (error) {
        alert("Erreur lors du chargement de la galerie.");
        console.error(error);
    }
});

function displayWorks(works) {
    const gallery = document.querySelector(".gallery");
    if (!gallery) return;
    gallery.innerHTML = "";
    works.forEach(work => {
        const figure = document.createElement("figure");
        figure.innerHTML = `
            <img src="${work.imageUrl}" alt="${work.title}">
            <figcaption>${work.title}</figcaption>
        `;
        gallery.appendChild(figure);
    });
}

function displayCategories(categories, works) {
    const filters = document.querySelector(".filters");
    if (!filters) return;
    filters.innerHTML = "";

    // Bouton "Tous"
    const allBtn = document.createElement("button");
    allBtn.textContent = "Tous";
    allBtn.addEventListener("click", () => displayWorks(works));
    filters.appendChild(allBtn);

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category.name;
        btn.addEventListener("click", () => {
            const filtered = works.filter(w => w.categoryId === category.id);
            displayWorks(filtered);
        });
        filters.appendChild(btn);
    });
}
