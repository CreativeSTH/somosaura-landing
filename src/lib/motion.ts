import gsap from 'gsap';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Debe calzar con el reposo borroso definido en global.css (html.js .js-word / .section-visual). */
const WORD_HIDDEN = { opacity: 0, filter: 'blur(8px)', y: 18 };
const VISUAL_HIDDEN = { opacity: 0, filter: 'blur(12px)' };

function getAnimatableTargets(id: string) {
  const section = document.querySelector<HTMLElement>(`[data-section-id="${id}"]`);
  if (!section) return null;

  return {
    words: Array.from(section.querySelectorAll<HTMLElement>('.js-word')),
    visual: section.querySelector<HTMLElement>('.section-visual'),
  };
}

export function revealSection(id: string): void {
  const targets = getAnimatableTargets(id);
  if (!targets) return;
  const { words, visual } = targets;

  if (prefersReducedMotion()) {
    gsap.to([...words, visual].filter(Boolean) as Element[], {
      opacity: 1,
      filter: 'blur(0px)',
      duration: 0.3,
    });
    return;
  }

  const tl = gsap.timeline();

  tl.to(
    words,
    {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
    },
    0
  );

  if (visual) {
    tl.to(
      visual,
      {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.7,
        ease: 'power2.out',
      },
      0.15
    );
  }
}

/** Vuelve la sección al reposo borroso — corre off-screen, así la próxima vez que reingrese hay algo que revelar. */
export function hideSection(id: string): void {
  const targets = getAnimatableTargets(id);
  if (!targets) return;
  const { words, visual } = targets;

  gsap.set(words, WORD_HIDDEN);
  if (visual) {
    gsap.set(visual, VISUAL_HIDDEN);
  }
}
