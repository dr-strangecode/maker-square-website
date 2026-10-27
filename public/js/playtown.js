/* Progressive enhancement only: all links and page content work without motion. */
(() => {
  const button = document.querySelector('.ms-menu-button');
  const menu = document.getElementById('ms-mobile-menu');
  const closeMenu = (restoreFocus = false) => {
    if (!button || !menu) return;
    menu.hidden = true;
    button.setAttribute('aria-expanded', 'false');
    if (restoreFocus) button.focus();
  };
  button?.addEventListener('click', () => {
    if (!menu) return;
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    menu.hidden = !opening;
  });
  menu?.addEventListener('click', (event) => {
    if (event.target instanceof Element && event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && button?.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  const desktop = window.matchMedia('(min-width: 941px)');
  desktop.addEventListener('change', (event) => { if (event.matches) closeMenu(); });

  const elements = [...document.querySelectorAll('[data-ms-reveal]')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let observer;
  const showAll = () => {
    document.documentElement.classList.remove('ms-motion');
    elements.forEach(el => el.classList.add('ms-visible'));
    observer?.disconnect();
  };
  if (reduced.matches || !('IntersectionObserver' in window)) { showAll(); return; }
  try {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ms-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -12px 0px' });
    elements.forEach(el => {
      // Do not hide anything that was already visible when the script loaded.
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('ms-visible');
      observer.observe(el);
    });
    document.documentElement.classList.add('ms-motion');
    reduced.addEventListener('change', event => { if (event.matches) showAll(); });
    window.addEventListener('beforeprint', showAll);
    window.addEventListener('pageshow', event => { if (event.persisted) showAll(); });
  } catch { showAll(); }
})();
