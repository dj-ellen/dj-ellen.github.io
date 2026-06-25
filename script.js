/* ==========================================================================
   DJ ELLEN — script.js
   Centrale, herbruikbare logica voor het mobiele navigatiemenu
   en de gedeelde footer (één bron, geen duplicatie per pagina).
   Wordt op elke pagina geladen via <script src="script.js" defer></script>
   ========================================================================== */

const FOOTER_HTML = `
  <div class="container">
    <div class="footer__grid">
      <div>
        <h3>DJ Ellen</h3>
        <p class="footer__tagline">Dans · Vrijheid · Verbinding</p>

        <ul class="footer__contact">
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5"/>
              <path d="M5 20 C5 15.5, 8 13 12 13 C16 13, 19 15.5, 19 20"/>
            </svg>
            Ellen Jansen
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 21 C8 17, 5 13.5, 5 9.5 C5 6, 8 3.5, 12 3.5 C16 3.5, 19 6, 19 9.5 C19 13.5, 16 17, 12 21 Z"/>
              <circle cx="12" cy="9.5" r="2.5"/>
            </svg>
            België, Wilsele in Leuven
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M4 7 L12 13 L20 7"/>
            </svg>
            <a href="mailto:ellen@ellenjansen.be">ellen@ellenjansen.be</a>
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
            <a href="https://www.facebook.com/ellen.jansen.731">www.facebook.com</a>
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12 L21 12 M12 3 C9.5 6, 9.5 18, 12 21 M12 3 C14.5 6, 14.5 18, 12 21"/>
            </svg>
            <a href="https://www.ellenjansen.be">www.ellenjansen.be</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 Ellen Jansen. Alle rechten voorbehouden.</p>
    </div>
  </div>
`;

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('site-footer');
  if (footer) footer.innerHTML = FOOTER_HTML;

  const toggle = document.querySelector('.navbar__toggle');
  const links = document.querySelector('.navbar__links');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('is-open');
    // aria-expanded moet de string "true"/"false" zijn, niet de boolean zelf
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
