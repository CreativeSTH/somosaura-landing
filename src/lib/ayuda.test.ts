import { describe, it, expect } from 'vitest';
import {
  armarIndiceAyuda,
  CATEGORIAS_AYUDA,
  articulosVencidos,
  relacionadosInexistentes,
  filtrarArticulos,
  normalizarBusqueda,
  type ArticuloAyuda,
} from './ayuda';

const art = (o: Partial<ArticuloAyuda>): ArticuloAyuda => ({
  slug: 'a',
  titulo: 'A',
  categoria: 'facturacion-electronica',
  resumen: '',
  palabrasClave: [],
  orden: 1,
  revisado: '2026-10-01',
  fuentes: [],
  relacionados: [],
  html: '<p>x</p>',
  ...o,
});

describe('normalizarBusqueda', () => {
  it('quita tildes, mayúsculas y espacios de más', () => {
    expect(normalizarBusqueda('  Facturación  ELECTRÓNICA ')).toBe('facturacion electronica');
    expect(normalizarBusqueda('Ñandú')).toBe('nandu');
  });
});

describe('filtrarArticulos', () => {
  const lista = [
    art({ slug: 'cufe', titulo: '¿Qué son el CUFE y el QR?', resumen: 'El código único' }),
    art({ slug: 'recibo', titulo: '¿Puedo emitir recibos?', palabrasClave: ['tirilla', 'POS'] }),
  ];
  it('consulta vacía devuelve todo', () => {
    expect(filtrarArticulos(lista, '  ').map((a) => a.slug)).toEqual(['cufe', 'recibo']);
  });
  it('busca sin tildes en título, resumen y palabras clave; todas las palabras deben aparecer', () => {
    expect(filtrarArticulos(lista, 'codigo unico').map((a) => a.slug)).toEqual(['cufe']);
    expect(filtrarArticulos(lista, 'TIRILLA').map((a) => a.slug)).toEqual(['recibo']);
    expect(filtrarArticulos(lista, 'cufe tirilla')).toEqual([]);
  });
});

describe('armarIndiceAyuda', () => {
  const articulos = [
    art({ slug: 'b', categoria: 'facturacion-electronica', orden: 2 }),
    art({ slug: 'a', categoria: 'facturacion-electronica', orden: 1 }),
    art({ slug: 'c', categoria: 'facturacion-electronica', orden: 3, relacionados: ['z'] }),
    art({ slug: 'r', categoria: 'recibos-y-comprobantes', orden: 1 }),
  ];
  const indice = armarIndiceAyuda(articulos, '2026-10-01T00:00:00.000Z');

  it('categorías en el orden fijo, sin las vacías, artículos por orden', () => {
    expect(indice.categorias).toEqual([
      { id: 'facturacion-electronica', nombre: 'Facturación electrónica', articulos: ['a', 'b', 'c'] },
      { id: 'recibos-y-comprobantes', nombre: 'Recibos y comprobantes', articulos: ['r'] },
    ]);
    expect(indice.generado).toBe('2026-10-01T00:00:00.000Z');
  });

  it('sin relacionados explícitos usa hasta 3 de la misma categoría (sin sí mismo); con explícitos los respeta', () => {
    const porSlug = Object.fromEntries(indice.articulos.map((a) => [a.slug, a]));
    expect(porSlug.a.relacionados).toEqual(['b', 'c']);
    expect(porSlug.c.relacionados).toEqual(['z']);
    expect(porSlug.r.relacionados).toEqual([]);
  });

  it('los artículos salen en el orden del índice', () => {
    expect(indice.articulos.map((a) => a.slug)).toEqual(['a', 'b', 'c', 'r']);
  });
});

describe('articulosVencidos', () => {
  it('marca los revisados hace más de 12 meses', () => {
    const hoy = new Date('2027-10-02T12:00:00Z');
    expect(
      articulosVencidos(
        [
          { slug: 'viejo', revisado: '2026-10-01' },
          { slug: 'nuevo', revisado: '2026-10-03' },
        ],
        hoy,
      ),
    ).toEqual(['viejo']);
  });
});

describe('relacionadosInexistentes', () => {
  it('lista los relacionados que apuntan a un artículo que no existe', () => {
    expect(
      relacionadosInexistentes([
        art({ slug: 'a', relacionados: ['b', 'zzz'] }),
        art({ slug: 'b', relacionados: ['a'] }),
      ]),
    ).toEqual(['a -> zzz']);
  });
});

describe('CATEGORIAS_AYUDA', () => {
  it('incluye "Bodegas e inventario" justo después de "Ventas y caja"', () => {
    const ids = CATEGORIAS_AYUDA.map((c) => c.id);
    expect(ids.indexOf('bodegas-e-inventario')).toBe(ids.indexOf('ventas-y-caja') + 1);
    expect(CATEGORIAS_AYUDA.find((c) => c.id === 'bodegas-e-inventario')?.nombre).toBe('Bodegas e inventario');
  });
});
