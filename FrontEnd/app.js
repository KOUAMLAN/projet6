document.addEventListener('DOMContentLoaded', function() {
  // Sélection des éléments
  const modal = document.querySelector('.modal');
  const openBtn = document.getElementById('openModalBtn');
  const closeBtn = document.querySelector('.modal_close'); // Assure-toi que ce bouton existe dans le HTML
  // const addBtn = document.querySelector('.modal_button_add'); // Optionnel
  // const deleteBtn = document.querySelector('.modal_button_delete'); // Optionnel

  // Vérifie que les éléments existent pour éviter les erreurs
  if (!modal || !openBtn) {
    console.error('Modal ou openBtn non trouvé !');
    return;
  }

  // Ouvre la modale
  openBtn.addEventListener('click', function() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
  });

  // Ferme la modale (si closeBtn existe)
  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    });
  }

  // Ferme la modale si on clique en dehors de la modal-wrapper
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });
});
