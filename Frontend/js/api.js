const API_URL = "http://localhost:5678/api";

export async function loginUser(email, password) {
  const response = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  // Si le serveur n'est pas accessible, fetch va lever une exception
  if (!response.ok) {
    // On tente de lire le message d'erreur de l'API, sinon message générique
    let error = "Erreur lors de la connexion";
    try {
      const data = await response.json();
      error = data.message || error;
    } catch {}
    throw new Error(error);
  }

  return response.json();
}
