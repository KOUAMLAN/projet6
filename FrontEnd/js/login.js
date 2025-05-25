import { loginUser } from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const errorMsg = document.getElementById("login-error");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    errorMsg.style.display = "none";

    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      const data = await loginUser(email, password);
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.href = "index.html";
      } else {
        errorMsg.textContent = "Email ou mot de passe incorrect";
        errorMsg.style.display = "block";
      }
    } catch (error) {
      errorMsg.textContent = "Erreur réseau : impossible de joindre le serveur.";
      errorMsg.style.display = "block";
      console.error(error);
    }
  });
});
