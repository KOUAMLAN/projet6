const API_URL = "http://localhost:5678/api";

export async function fetchWorks() {
  const res = await fetch(`${API_URL}/works`);
  return res.json();
}
