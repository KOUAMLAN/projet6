document.addEventListener('DOMContentLoaded', function() {
  const modal = document.querySelector('.modal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.querySelector('.modal_close');
  // Optionnel : fermer la modale avec les autres boutons si tu veux
  // const addBtn = document.querySelector('.modal_button_add');
  // const deleteBtn = document.querySelector('.modal_button_delete');

  // Ouvre la modale
  openBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });

  // Ferme la modale
  closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  // Fermer la modale si on clique en dehors de la modal-wrapper
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});
