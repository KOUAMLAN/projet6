document.addEventListener('DOMContentLoaded', function() {
  // Ouvre la modale au clic sur les liens "js-modal"
  document.querySelectorAll('.js-modal').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const modalId = this.getAttribute('href').replace('#', '');
      const modal = document.getElementById(modalId);
      modal.style.display = 'flex';
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  // Fermeture de la modale au clic sur la croix
  document.querySelectorAll('.js-modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const modal = document.querySelector('.modal[aria-hidden="false"]');
      if (modal) {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
      }
    });
  });

  // Fermeture de la modale au clic en dehors
  window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
      e.target.style.display = 'none';
      e.target.setAttribute('aria-hidden', 'true');
    }
  });
});


