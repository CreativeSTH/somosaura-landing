import { describe, it, expect } from 'vitest';
import { formatCOP } from './formatCurrency';

describe('formatCOP', () => {
  it('formatea miles con separador de punto y prefijo $', () => {
    expect(formatCOP(8500)).toBe('$8.500');
  });

  it('formatea cero como $0', () => {
    expect(formatCOP(0)).toBe('$0');
  });

  it('formatea montos grandes con varios separadores', () => {
    expect(formatCOP(1250000)).toBe('$1.250.000');
  });
});
