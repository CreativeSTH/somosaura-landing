import { describe, it, expect } from 'vitest';
import { computeChange, suggestReceived } from './payment';

describe('computeChange', () => {
  it('calcula la devuelta cuando recibe más que el total', () => {
    expect(computeChange(12700, 20000)).toBe(7300);
  });

  it('devuelve 0 cuando recibe exactamente el total', () => {
    expect(computeChange(12700, 12700)).toBe(0);
  });

  it('nunca devuelve negativo cuando recibe menos que el total', () => {
    expect(computeChange(12700, 5000)).toBe(0);
  });
});

describe('suggestReceived', () => {
  it('redondea hacia arriba al siguiente múltiplo de 10.000 por encima del total', () => {
    expect(suggestReceived(12700)).toBe(20000);
  });

  it('si el total ya es múltiplo de 10.000, sugiere el siguiente múltiplo', () => {
    expect(suggestReceived(20000)).toBe(30000);
  });

  it('devuelve 0 para un total en 0 o negativo', () => {
    expect(suggestReceived(0)).toBe(0);
    expect(suggestReceived(-100)).toBe(0);
  });
});
