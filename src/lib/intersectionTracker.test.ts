import { describe, it, expect } from 'vitest';
import { createIntersectionTracker } from './intersectionTracker';

describe('createIntersectionTracker', () => {
  it('revela la primera vez que una sección entra en pantalla', () => {
    const tracker = createIntersectionTracker();
    expect(tracker.shouldReveal('inicio', true)).toBe(true);
  });

  it('no vuelve a revelar mientras la sección sigue intersectando', () => {
    const tracker = createIntersectionTracker();
    tracker.shouldReveal('inicio', true);
    expect(tracker.shouldReveal('inicio', true)).toBe(false);
  });

  it('vuelve a revelar si la sección sale de pantalla y reingresa', () => {
    const tracker = createIntersectionTracker();
    tracker.shouldReveal('inicio', true);
    tracker.shouldReveal('inicio', false);
    expect(tracker.shouldReveal('inicio', true)).toBe(true);
  });

  it('trackea cada id de forma independiente', () => {
    const tracker = createIntersectionTracker();
    tracker.shouldReveal('inicio', true);
    expect(tracker.shouldReveal('domicilios', true)).toBe(true);
  });

  it('salir de pantalla nunca dispara un reveal', () => {
    const tracker = createIntersectionTracker();
    expect(tracker.shouldReveal('inicio', false)).toBe(false);
  });
});
