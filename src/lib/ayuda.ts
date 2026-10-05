/**
 * Centro de ayuda (spec docs/specs/2026-10-01-centro-de-ayuda.md): lógica pura compartida por las
 * páginas /ayuda y por /ayuda/articulos.json, que AURA lee para mostrar la ayuda dentro del sistema.
 */
export type CategoriaAyuda =
  | 'facturacion-electronica'
  | 'recibos-y-comprobantes'
  | 'ventas-y-caja'
  | 'bodegas-e-inventario'
  | 'sin-internet'
  | 'tu-cuenta';

/** Orden fijo de la portada. "Tu cuenta AURA" nace vacía y se oculta mientras no tenga artículos. */
export const CATEGORIAS_AYUDA: readonly { id: CategoriaAyuda; nombre: string }[] = [
  { id: 'facturacion-electronica', nombre: 'Facturación electrónica' },
  { id: 'recibos-y-comprobantes', nombre: 'Recibos y comprobantes' },
  { id: 'ventas-y-caja', nombre: 'Ventas y caja' },
  { id: 'bodegas-e-inventario', nombre: 'Bodegas e inventario' },
  { id: 'sin-internet', nombre: 'Sin internet y contingencia' },
  { id: 'tu-cuenta', nombre: 'Tu cuenta AURA' },
];

export interface FuenteAyuda {
  texto: string;
  url?: string;
}

export interface ArticuloAyuda {
  slug: string;
  titulo: string;
  categoria: CategoriaAyuda;
  resumen: string;
  palabrasClave: string[];
  orden: number;
  /** 'YYYY-MM-DD' */
  revisado: string;
  fuentes: FuenteAyuda[];
  relacionados: string[];
  /** Cuerpo ya renderizado por Astro: solo etiquetas semánticas, sin clases. */
  html: string;
}

export interface CategoriaIndice {
  id: CategoriaAyuda;
  nombre: string;
  articulos: string[];
}

export interface IndiceAyuda {
  generado: string;
  categorias: CategoriaIndice[];
  articulos: ArticuloAyuda[];
}

const MAX_RELACIONADOS = 3;

export function normalizarBusqueda(texto: string): string {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

export function textoBusqueda(a: Pick<ArticuloAyuda, 'titulo' | 'resumen' | 'palabrasClave'>): string {
  return normalizarBusqueda([a.titulo, a.resumen, ...a.palabrasClave].join(' '));
}

/** Todas las palabras de la consulta deben aparecer (en cualquier orden). */
export function filtrarArticulos<T extends Pick<ArticuloAyuda, 'titulo' | 'resumen' | 'palabrasClave'>>(
  articulos: T[],
  consulta: string,
): T[] {
  const palabras = normalizarBusqueda(consulta).split(' ').filter(Boolean);
  if (palabras.length === 0) return articulos;
  return articulos.filter((a) => {
    const texto = textoBusqueda(a);
    return palabras.every((p) => texto.includes(p));
  });
}

export function armarIndiceAyuda(articulos: ArticuloAyuda[], generado: string): IndiceAyuda {
  const categorias: CategoriaIndice[] = [];
  const ordenados: ArticuloAyuda[] = [];
  for (const { id, nombre } of CATEGORIAS_AYUDA) {
    const deLaCategoria = articulos.filter((a) => a.categoria === id).sort((x, y) => x.orden - y.orden);
    if (deLaCategoria.length === 0) continue;
    categorias.push({ id, nombre, articulos: deLaCategoria.map((a) => a.slug) });
    for (const a of deLaCategoria) {
      const relacionados = a.relacionados.length
        ? a.relacionados
        : deLaCategoria
            .filter((b) => b.slug !== a.slug)
            .slice(0, MAX_RELACIONADOS)
            .map((b) => b.slug);
      ordenados.push({ ...a, relacionados });
    }
  }
  return { generado, categorias, articulos: ordenados };
}

/** Slugs revisados hace más de 12 meses: cifras legales (UVT, resoluciones) que pueden estar viejas. */
export function articulosVencidos(articulos: Pick<ArticuloAyuda, 'slug' | 'revisado'>[], hoy: Date): string[] {
  const limite = new Date(hoy);
  limite.setUTCFullYear(limite.getUTCFullYear() - 1);
  const corte = limite.toISOString().slice(0, 10);
  return articulos.filter((a) => a.revisado < corte).map((a) => a.slug);
}

/**
 * 'origen -> destino' de cada relacionado que no existe. reference() de Astro no lo valida con el
 * loader glob (comprobado en el build), así que lo hace esto: mejor romper el build que publicar un enlace roto.
 */
export function relacionadosInexistentes(articulos: Pick<ArticuloAyuda, 'slug' | 'relacionados'>[]): string[] {
  const slugs = new Set(articulos.map((a) => a.slug));
  return articulos.flatMap((a) => a.relacionados.filter((r) => !slugs.has(r)).map((r) => `${a.slug} -> ${r}`));
}
