import { describe, it, expect } from 'vitest';
import { createCart } from './miniDemoCart';

describe('createCart', () => {
  it('empieza vacío', () => {
    const cart = createCart();
    expect(cart.items).toEqual([]);
    expect(cart.total()).toBe(0);
  });

  it('suma el total de los items agregados', () => {
    const cart = createCart();
    cart.add(8500);
    cart.add(4200);
    expect(cart.items).toEqual([8500, 4200]);
    expect(cart.total()).toBe(12700);
  });

  it('clear() vacía el carrito', () => {
    const cart = createCart();
    cart.add(15000);
    cart.clear();
    expect(cart.items).toEqual([]);
    expect(cart.total()).toBe(0);
  });
});
