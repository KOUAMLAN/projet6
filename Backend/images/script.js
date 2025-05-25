const API_URL = "http://localhost:5678/api";

const gallery = document.querySelector('.gallery');
const filtersDiv = document.getElementById('filters');
const editBtn = document.getElementById('edit-btn');
const loginLink = document.getElementById('login-link');

let allWorks = [];
let allCategories = [];

async function fetchWorks() {
  const res = await fetch(`${API_URL}/works`);
  return res.json();
}

async function fetchCategories() {
  const res = await fetch(`${API_URL}/categories`);
  return res.json();
}

function displayWorks(works) {
  gallery.innerHTML = '';
  works.forEach(work => {
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = work.imageUrl;
    img.alt = work.title;
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = work.title;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
  });
}

function displayFilters(categories) {
  filtersDiv.innerHTML = '';
  const allBtn = document.createElement('button');
  allBtn.textContent = "Tous";
  allBtn.classList.add('filter-btn');
  allBtn.onclick = () => displayWorks(allWorks);
  filtersDiv.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.textContent = cat.name;
    btn.classList.add('filter-btn');
    btn.onclick = () => displayWorks(allWorks.filter(w => w.categoryId === cat.id));
    filtersDiv.appendChild(btn);
  });
}

async function init() {
  allWorks = await fetchWorks();
  allCategories = await fetchCategories();
  displayWorks(allWorks);
  displayFilters(allCategories);

  // Affichage admin si connecté
  if (localStorage.getItem('token')) {
    editBtn.style.display = 'block';
    loginLink.style.display = 'none';
  }
}
init();

// Ouvre la modale d'admin
editBtn.addEventListener('click', () => {
  openModal(allWorks, allCategories);
});
