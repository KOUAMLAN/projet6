document.addEventListener('DOMContentLoaded', function() {
  // OUVERTURE de la modale au clic sur un élément js-modal
  document.querySelectorAll('.js-modal').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = btn.getAttribute('href');
      const modal = document.querySelector(modalId);
      if (modal) {
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      }
    });
  });

  // FERMETURE de la modale au clic sur la croix
  document.querySelectorAll('.js-modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = btn.closest('.modal');
      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // FERMETURE de la modale au clic en dehors du contenu
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
    // Empêche la fermeture si on clique dans le contenu
    const modalStop = modal.querySelector('.js-modal-stop');
    if (modalStop) {
      modalStop.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });
});

