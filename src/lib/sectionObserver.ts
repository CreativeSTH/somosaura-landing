export interface SectionObserverOptions {
  onActivate: (id: string) => void;
  onReveal: (id: string) => void;
  threshold?: number;
}

export function observeSections(options: SectionObserverOptions): IntersectionObserver {
  const revealed = new Set<string>();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).dataset.sectionId;
        if (!id || !entry.isIntersecting) continue;

        options.onActivate(id);

        if (!revealed.has(id)) {
          revealed.add(id);
          options.onReveal(id);
        }
      }
    },
    { threshold: options.threshold ?? 0.5 }
  );

  document.querySelectorAll<HTMLElement>('[data-section-id]').forEach((el) => observer.observe(el));

  return observer;
}
