import { describe, it, expect } from 'vitest';
import { createIntersectionTracker } from './intersectionTracker';

describe('createIntersectionTracker', () => {
  it("devuelve 'entered' la primera vez que una sección entra en pantalla", () => {
    const tracker = createIntersectionTracker();
    expect(tracker.update('inicio', true)).toBe('entered');
  });

  it("devuelve 'none' mientras la sección sigue intersectando", () => {
    const tracker = createIntersectionTracker();
    tracker.update('inicio', true);
    expect(tracker.update('inicio', true)).toBe('none');
  });

  it("devuelve 'exited' cuando la sección sale de pantalla", () => {
    const tracker = createIntersectionTracker();
    tracker.update('inicio', true);
    expect(tracker.update('inicio', false)).toBe('exited');
  });

  it("devuelve 'none' si ya estaba afuera y sigue afuera", () => {
    const tracker = createIntersectionTracker();
    expect(tracker.update('inicio', false)).toBe('none');
  });

  it("vuelve a devolver 'entered' si reingresa después de salir", () => {
    const tracker = createIntersectionTracker();
    tracker.update('inicio', true);
    tracker.update('inicio', false);
    expect(tracker.update('inicio', true)).toBe('entered');
  });

  it('trackea cada id de forma independiente', () => {
    const tracker = createIntersectionTracker();
    tracker.update('inicio', true);
    expect(tracker.update('domicilios', true)).toBe('entered');
  });
});
