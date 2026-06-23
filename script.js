/* ==========================================================================
   DJ ELLEN — script.js
   Centrale, herbruikbare logica voor het mobiele navigatiemenu.
   Wordt op elke pagina geladen via <script src="script.js" defer></script>
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    // aria-expanded moet de string "true"/"false" zijn, niet de boolean zelf
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
