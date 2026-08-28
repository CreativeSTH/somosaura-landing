import gsap from 'gsap';
import { prefersReducedMotion } from './motion';
import { getTransitionAccentVar } from './pageTransitionColors';
import { resolveInternalPathname, shouldInterceptNavigation } from './pageTransitionGuard';

const STORAGE_KEY = 'aura:pageTransitionColor';
const REST_X = -20;
const EXIT_X = 120;
const PHASE_DURATION = 0.3;

function applyClipPath(overlay: HTMLElement, leadX: number, trailX: number): void {
  overlay.style.clipPath = `inset(0 calc(100% - ${leadX}%) 0 ${trailX}% round 9999px)`;
}

function runCoverPhase(overlay: HTMLElement, url: string, colorVar: string): void {
  overlay.style.setProperty('--page-transition-color', `var(${colorVar})`);

  if (prefersReducedMotion()) {
    window.location.href = url;
    return;
  }

  const state = { leadX: REST_X, trailX: REST_X };
  applyClipPath(overlay, state.leadX, state.trailX);

  gsap.to(state, {
    leadX: EXIT_X,
    duration: PHASE_DURATION,
    ease: 'expo.out',
    onUpdate: () => applyClipPath(overlay, state.leadX, state.trailX),
    onComplete: () => {
      sessionStorage.setItem(STORAGE_KEY, colorVar);
      window.location.href = url;
    },
  });
}

export function runRevealPhase(overlay: HTMLElement, colorVar: string): void {
  document.documentElement.classList.remove('page-transition-pending');
  overlay.style.setProperty('--page-transition-color', `var(${colorVar})`);

  if (prefersReducedMotion()) {
    applyClipPath(overlay, REST_X, REST_X);
    return;
  }

  const state = { leadX: EXIT_X, trailX: REST_X };
  applyClipPath(overlay, state.leadX, state.trailX);

  gsap.to(state, {
    trailX: EXIT_X,
    duration: PHASE_DURATION + 0.05,
    ease: 'power2.in',
    onUpdate: () => applyClipPath(overlay, state.leadX, state.trailX),
    onComplete: () => applyClipPath(overlay, REST_X, REST_X),
  });
}

export function initPageTransition(): void {
  const overlay = document.getElementById('pageTransitionOverlay');
  if (!overlay) return;

  const pendingColor = sessionStorage.getItem(STORAGE_KEY);
  if (pendingColor) {
    sessionStorage.removeItem(STORAGE_KEY);
    runRevealPhase(overlay, pendingColor);
  }

  // Una vez que arrancó la fase de cobertura, cualquier click nuevo se
  // ignora — evita dos timelines de GSAP peleando por el mismo overlay y dos
  // navegaciones compitiendo si el usuario hace doble click.
  let transitionInFlight = false;

  document.addEventListener('click', (event) => {
    if (transitionInFlight) return;

    const anchor = (event.target as HTMLElement | null)?.closest?.('a');
    if (!anchor) return;

    const destinationPathname = resolveInternalPathname(anchor.href, window.location.origin);

    const intercept = shouldInterceptNavigation({
      destinationPathname,
      currentPathname: window.location.pathname,
      target: anchor.getAttribute('target'),
      noTransition: anchor.hasAttribute('data-no-transition'),
      ctrlKey: event.ctrlKey,
      metaKey: event.metaKey,
      shiftKey: event.shiftKey,
      button: event.button,
    });

    if (!intercept || !destinationPathname) return;

    event.preventDefault();
    transitionInFlight = true;
    runCoverPhase(overlay, anchor.href, getTransitionAccentVar(destinationPathname));
  });
}
