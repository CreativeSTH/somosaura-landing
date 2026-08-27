import gsap from 'gsap';

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function revealSection(id: string): void {
  const section = document.querySelector<HTMLElement>(`[data-section-id="${id}"]`);
  if (!section) return;

  const words = section.querySelectorAll<HTMLElement>('.js-word');
  const visual = section.querySelector<HTMLElement>('.section-visual');

  if (prefersReducedMotion()) {
    gsap.from([...words, visual].filter(Boolean) as Element[], {
      opacity: 0,
      duration: 0.3,
    });
    return;
  }

  const tl = gsap.timeline();

  tl.from(
    words,
    {
      opacity: 0,
      filter: 'blur(8px)',
      y: 18,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.08,
    },
    0
  );

  if (visual) {
    tl.from(
      visual,
      {
        opacity: 0,
        filter: 'blur(12px)',
        duration: 0.7,
        ease: 'power2.out',
      },
      0.15
    );
  }
}
