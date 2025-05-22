import { fetchWorks } from "./api.js";

const gallery = document.getElementById("gallery");

function createFigure(work) {
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = work.imageUrl;
  img.alt = work.title;
  const caption = document.createElement("figcaption");
  caption.textContent = work.title;
  figure.appendChild(img);
  figure.appendChild(caption);
  return figure;
}

async function loadWorks() {
  gallery.innerHTML = "";
  const works = await fetchWorks();
  works.forEach(work => gallery.appendChild(createFigure(work)));
}

window.addEventListener("DOMContentLoaded", loadWorks);
