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
            Ellen Voorbeeld
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 21 C8 17, 5 13.5, 5 9.5 C5 6, 8 3.5, 12 3.5 C16 3.5, 19 6, 19 9.5 C19 13.5, 16 17, 12 21 Z"/>
              <circle cx="12" cy="9.5" r="2.5"/>
            </svg>
            Watervloedstraat 20, 3012 Wilsele
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2"/>
              <path d="M4 7 L12 13 L20 7"/>
            </svg>
            <a href="mailto:info@djellen.be">info@djellen.be</a>
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 4 C5 4, 4 5, 4 6 C4 14, 10 20, 18 20 C19 20, 20 19, 20 18 L20 16 C20 15, 19 14.5, 18.5 14.5 L15.5 14 C15 14, 14.5 14.3, 14.3 14.7 L13.5 16.2 C11.3 15, 9 12.7, 7.8 10.5 L9.3 9.7 C9.7 9.5, 10 9, 10 8.5 L9.5 5.5 C9.5 5, 9 4, 8 4 Z"/>
            </svg>
            <a href="tel:+32470000000">+32 470 00 00 00</a>
          </li>
          <li>
            <svg class="icon-inline" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="12" cy="12" r="9"/>
              <path d="M3 12 L21 12 M12 3 C9.5 6, 9.5 18, 12 21 M12 3 C14.5 6, 14.5 18, 12 21"/>
            </svg>
            <a href="https://www.djellen.be">www.djellen.be</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p>&copy; 2026 DJ Ellen. Alle rechten voorbehouden.</p>
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
