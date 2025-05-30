document.addEventListener('DOMContentLoaded', function() {
  // Fermeture de la modale au clic sur la croix
  document.querySelectorAll('.js-modal-close').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector('.modal[aria-hidden="false"]').style.display = 'none';
      document.querySelector('.modal[aria-hidden="false"]').setAttribute('aria-hidden', 'true');
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

