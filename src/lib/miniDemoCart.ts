export interface Cart {
  items: number[];
  add(price: number): void;
  total(): number;
  clear(): void;
}

export function createCart(): Cart {
  const items: number[] = [];
  return {
    items,
    add(price: number) {
      items.push(price);
    },
    total() {
      return items.reduce((sum, price) => sum + price, 0);
    },
    clear() {
      items.length = 0;
    },
  };
}
