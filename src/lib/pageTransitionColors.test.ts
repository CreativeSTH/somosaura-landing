import { describe, it, expect } from 'vitest';
import { getTransitionAccentVar } from './pageTransitionColors';

describe('getTransitionAccentVar', () => {
  it('devuelve el acento violeta para Inicio', () => {
    expect(getTransitionAccentVar('/')).toBe('--accent-violet');
  });

  it('devuelve el acento teal para ¿Qué es Aura?', () => {
    expect(getTransitionAccentVar('/que-es-aura')).toBe('--accent-teal');
  });

  it('devuelve el acento azul para Conoce Aura a Fondo', () => {
    expect(getTransitionAccentVar('/nuestro-software')).toBe('--accent-blue');
  });

  it('devuelve el acento ámbar para Planes', () => {
    expect(getTransitionAccentVar('/planes')).toBe('--accent-amber');
  });

  it('devuelve el acento rosa para Privacidad', () => {
    expect(getTransitionAccentVar('/politica-de-privacidad')).toBe('--accent-pink');
  });

  it('cae al acento violeta por defecto para un pathname desconocido', () => {
    expect(getTransitionAccentVar('/no-existe')).toBe('--accent-violet');
  });
});
