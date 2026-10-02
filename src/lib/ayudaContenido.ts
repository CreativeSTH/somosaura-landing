import { getCollection } from 'astro:content';
import {
  armarIndiceAyuda,
  articulosVencidos,
  relacionadosInexistentes,
  type ArticuloAyuda,
  type IndiceAyuda,
} from './ayuda';

/** Único punto que toca astro:content; lo usan las páginas /ayuda y el endpoint articulos.json. */
export async function cargarIndiceAyuda(): Promise<IndiceAyuda> {
  const entradas = await getCollection('ayuda');
  const articulos: ArticuloAyuda[] = entradas.map((e) => ({
    slug: e.id,
    titulo: e.data.titulo,
    categoria: e.data.categoria,
    resumen: e.data.resumen,
    palabrasClave: e.data.palabrasClave,
    orden: e.data.orden,
    revisado: e.data.revisado.toISOString().slice(0, 10),
    fuentes: e.data.fuentes,
    relacionados: e.data.relacionados.map((r) => r.id),
    html: e.rendered?.html ?? '',
  }));
  const rotos = relacionadosInexistentes(articulos);
  if (rotos.length) {
    throw new Error(`[ayuda] "relacionados" apunta a artículos que no existen: ${rotos.join(', ')}`);
  }
  const vencidos = articulosVencidos(articulos, new Date());
  if (vencidos.length) {
    console.warn(
      `[ayuda] Artículos con más de 12 meses sin revisar (cifras legales pueden estar viejas): ${vencidos.join(', ')}`,
    );
  }
  return armarIndiceAyuda(articulos, new Date().toISOString());
}
