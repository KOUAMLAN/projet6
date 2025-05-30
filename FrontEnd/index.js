async function getWorks() {
  return await fetch("http://localhost:5678/api/works")
    .then((data) => data.json())
    .catch((error) => {
      console.log("Les données n'ont pas chargé" + error);
      return [];
    });
}

async function getCategories() {
  return await fetch("http://localhost:5678/api/categories")
    .then((data) => data.json())
    .catch((error) => {
      console.log("Les données n'ont pas chargé : " + error);
      return [];
    });
}

function displayWorks(works) {
  let gallery = document.querySelector(".gallery");
  let galleryModal = document.getElementById("modal_projet");
  gallery.innerHTML = "";
  galleryModal.innerHTML = "";

  for (const work of works) {
    // Page principale
    let image = document.createElement("img");
    let figure = document.createElement("figure");
    let figCaption = document.createElement("figCaption");
    image.src = work.imageUrl;
    image.setAttribute("crossorigin", "anonymous");
    figCaption.innerText = work.title;
    figure.appendChild(image);
    figure.appendChild(figCaption);
    gallery.appendChild(figure);

    // Modale : uniquement la corbeille
    let figureModal = document.createElement("figure");
    let imageModal = document.createElement("img");
    imageModal.src = work.imageUrl;
    imageModal.setAttribute("crossorigin", "anonymous");
    imageModal.style.height = "100px";
    figureModal.appendChild(imageModal);

    let textGalleryModal = document.createElement("p");
    textGalleryModal.innerHTML = "éditer";
    figureModal.appendChild(textGalleryModal);

    const deleteButton = document.createElement("a");
    deleteButton.setAttribute("id", work.id);
    deleteButton.classList.add("fa-solid", "fa-trash-can", "delete_button");
    figureModal.appendChild(deleteButton);

    galleryModal.appendChild(figureModal);
  }

  // Suppression
  const deleteButtons = document.querySelectorAll(".delete_button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", async (event) => {
      event.preventDefault();
      if (confirm("Êtes-vous sûr de vouloir supprimer ce fichier?")) {
        await deleteWork(button.getAttribute("id"));
        const works = await getWorks();
        displayWorks(works);
      }
    });
  });
}

async function displayCategories(categories) {
  let filter = document.querySelector(".filter");
  filter.innerHTML = "";

  let all = document.createElement("button");
  all.id = "all";
  all.innerHTML = "Tous";
  all.className = "filter_element";
  filter.appendChild(all);

  let select_input = document.getElementById("category-input");
  if (select_input) select_input.innerHTML = "<option></option>";

  for (const category of categories) {
    let filter_element = document.createElement("button");
    let option_input = new Option(category.name, category.id);
    filter_element.id = category.id;
    filter_element.innerHTML = category.name;
    filter_element.className = "filter_element";
    filter.appendChild(filter_element);
    if (select_input) select_input.add(option_input, undefined);
  }
}

async function indexLogout() {
  const categories = await getCategories();
  const works = await getWorks();
  displayCategories(categories);
  displayWorks(works);

  let filters = document.querySelectorAll(".filter_element");
  let [all, ...rest] = filters;

  for (const filter of rest) {
    filter.addEventListener("click", () => {
      const newWorks = works.filter((work) => work.category.id == filter.id);
      displayWorks(newWorks);
    });
  }

  all.addEventListener("click", () => {
    displayWorks(works);
  });

  for (const filter of filters) {
    filter.addEventListener("click", () => {
      let active = document.querySelector(".filter_element.active");
      if (active) {
        active.classList.remove("active");
      }
      filter.classList.add("active");
    });
  }
}

indexLogout();

if (sessionStorage.token) {
  let logout = document.querySelector(".login");
  logout.innerHTML = "logout";
  logout.addEventListener("click", () => {
    sessionStorage.removeItem("token");
  });

  let edition = document.querySelectorAll(".edition");
  edition.forEach((element) => {
    element.hidden = false;
  });
}
const token = sessionStorage.token;

async function deleteWork(workId) {
  const response = await fetch(`http://localhost:5678/api/works/${workId}`, {
    method: "DELETE",
    headers: {
      accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    alert("Erreur lors de la suppression.");
  }
}

const form = document.querySelector("#image-form");
const feedback = document.getElementById("add-image-feedback");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData();
    const image = document.querySelector("#image-input").files[0];
    const title = document.getElementById("title-input").value;
    const category = document.getElementById("category-input").value;
    formData.append("image", image);
    formData.append("title", title);
    formData.append("category", category);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
    };

    const response = await fetch("http://localhost:5678/api/works/", requestOptions);
    if (response.ok) {
      feedback.style.display = "block";
      feedback.innerText = "Image ajoutée avec succès !";
      const works = await getWorks();
      displayWorks(works);
      setTimeout(() => {
        feedback.style.display = "none";
        document.querySelector("#modal2").style.display = "none";
        document.querySelector("#modal1").style.display = "flex";
      }, 1000);
      form.reset();
      document.querySelector(".preview").style.display = "none";
      document.querySelector(".button_send_new_work").disabled = true;
      document.querySelector(".button_send_new_work").style.background = "grey";
    } else {
      feedback.style.display = "block";
      feedback.innerText = "Erreur lors de l'ajout.";
    }
  });

  let previewDiv = document.querySelector(".preview");
  document.getElementById("image-input").addEventListener("change", function (e) {
    if (e.target.files[0]) {
      previewDiv.style.display = "flex";
      document.getElementById("preview-input").src = window.URL.createObjectURL(e.target.files[0]);
    } else {
      previewDiv.style.display = "none";
    }
  });

  form.addEventListener("input", function (event) {
    let isValid = form.checkValidity();
    const btn = document.querySelector(".button_send_new_work");
    btn.disabled = !isValid;
    btn.style.background = isValid ? "#1D6154" : "grey";
  });
}
