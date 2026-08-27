import { createIntersectionTracker } from './intersectionTracker';

export interface SectionObserverOptions {
  onActivate: (id: string) => void;
  onReveal: (id: string) => void;
  threshold?: number;
}

export function observeSections(options: SectionObserverOptions): IntersectionObserver {
  const tracker = createIntersectionTracker();

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const id = (entry.target as HTMLElement).dataset.sectionId;
        if (!id) continue;

        if (entry.isIntersecting) {
          options.onActivate(id);
        }

        if (tracker.shouldReveal(id, entry.isIntersecting)) {
          options.onReveal(id);
        }
      }
    },
    { threshold: options.threshold ?? 0.5 }
  );

  document.querySelectorAll<HTMLElement>('[data-section-id]').forEach((el) => observer.observe(el));

  return observer;
}
