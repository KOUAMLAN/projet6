// js/login.js

import { loginUser } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#login-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = form.elements["email"].value;
        const password = form.elements["password"].value;
        try {
            const result = await loginUser(email, password);
            if (result.token) {
                localStorage.setItem("token", result.token);
                window.location.href = "index.html";
            } else {
                alert("Identifiants invalides !");
            }
        } catch (error) {
            alert("Erreur lors de la connexion.");
            console.error(error);
        }
    });
});
