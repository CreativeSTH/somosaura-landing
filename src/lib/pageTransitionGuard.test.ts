import { describe, it, expect } from 'vitest';
import { resolveInternalPathname, shouldInterceptNavigation } from './pageTransitionGuard';

describe('resolveInternalPathname', () => {
  const origin = 'https://somosaura.com.co';

  it('resuelve un href relativo interno a su pathname', () => {
    expect(resolveInternalPathname('/planes', origin)).toBe('/planes');
  });

  it('resuelve un href absoluto del mismo origin', () => {
    expect(resolveInternalPathname('https://somosaura.com.co/que-es-aura', origin)).toBe('/que-es-aura');
  });

  it('ignora query string y hash', () => {
    expect(resolveInternalPathname('/planes?utm=x#pricing', origin)).toBe('/planes');
  });

  it('devuelve null para un origin distinto (link externo)', () => {
    expect(resolveInternalPathname('https://wa.me/123', origin)).toBeNull();
  });

  it('devuelve null para un scheme no-http como mailto:', () => {
    expect(resolveInternalPathname('mailto:hola@somosaura.com.co', origin)).toBeNull();
  });
});

describe('shouldInterceptNavigation', () => {
  const baseParams = {
    destinationPathname: '/planes',
    currentPathname: '/',
    target: null,
    noTransition: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    button: 0,
  };

  it('intercepta un click simple a una página distinta', () => {
    expect(shouldInterceptNavigation(baseParams)).toBe(true);
  });

  it('no intercepta si el destino es la página actual (ancla interna)', () => {
    expect(
      shouldInterceptNavigation({ ...baseParams, destinationPathname: '/', currentPathname: '/' })
    ).toBe(false);
  });

  it('no intercepta si no se pudo resolver un pathname interno (link externo)', () => {
    expect(shouldInterceptNavigation({ ...baseParams, destinationPathname: null })).toBe(false);
  });

  it('no intercepta con target="_blank"', () => {
    expect(shouldInterceptNavigation({ ...baseParams, target: '_blank' })).toBe(false);
  });

  it('no intercepta con el atributo data-no-transition', () => {
    expect(shouldInterceptNavigation({ ...baseParams, noTransition: true })).toBe(false);
  });

  it('no intercepta un click con Ctrl o Cmd (abrir en pestaña nueva)', () => {
    expect(shouldInterceptNavigation({ ...baseParams, ctrlKey: true })).toBe(false);
    expect(shouldInterceptNavigation({ ...baseParams, metaKey: true })).toBe(false);
  });

  it('no intercepta un click del botón del medio', () => {
    expect(shouldInterceptNavigation({ ...baseParams, button: 1 })).toBe(false);
  });
});
