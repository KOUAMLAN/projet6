// js/api.js

const API_URL = "http://localhost:5678/api/";

export async function fetchWorks() {
    const response = await fetch(API_URL + "works");
    if (!response.ok) throw new Error("Erreur lors de la récupération des travaux");
    return response.json();
}

export async function fetchCategories() {
    const response = await fetch(API_URL + "categories");
    if (!response.ok) throw new Error("Erreur lors de la récupération des catégories");
    return response.json();
}

export async function loginUser(email, password) {
    const response = await fetch(API_URL + "users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });
    return response.json();
}
