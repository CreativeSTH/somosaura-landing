import { runRevealPhase } from './pageTransition';
import { getTransitionAccentVar } from './pageTransitionColors';

const MIN_VISIBLE_MS = 400;
// Red de seguridad: si `window.load` nunca dispara (conexión lenta, un
// recurso que no resuelve), no dejamos al usuario mirando el loader para
// siempre — a los MAX_WAIT_MS revelamos el sitio igual.
const MAX_WAIT_MS = 8000;

export function initLoader(): void {
  if (document.documentElement.classList.contains('skip-loader')) return;

  const loader = document.getElementById('siteLoader');
  const overlay = document.getElementById('pageTransitionOverlay');
  if (!loader || !overlay) return;

  const shownAt = performance.now();
  let revealed = false;

  const reveal = () => {
    if (revealed) return;
    revealed = true;
    runRevealPhase(overlay, getTransitionAccentVar(window.location.pathname));
    loader.classList.add('is-done');
  };

  const hideLoader = () => {
    const elapsed = performance.now() - shownAt;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    window.setTimeout(reveal, remaining);
  };

  window.setTimeout(reveal, MAX_WAIT_MS);

  if (document.readyState === 'complete') {
    hideLoader();
  } else {
    window.addEventListener('load', hideLoader, { once: true });
  }
}
