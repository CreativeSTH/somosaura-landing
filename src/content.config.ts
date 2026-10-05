import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** Centro de ayuda — un .md por artículo; el nombre del archivo es el slug (/ayuda/<slug>). */
const ayuda = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ayuda' }),
  schema: z.object({
    titulo: z.string(),
    categoria: z.enum(['facturacion-electronica', 'recibos-y-comprobantes', 'ventas-y-caja', 'bodegas-e-inventario', 'sin-internet', 'tu-cuenta']),
    resumen: z.string().max(200),
    palabrasClave: z.array(z.string()).default([]),
    orden: z.number().int(),
    revisado: z.coerce.date(),
    fuentes: z.array(z.object({ texto: z.string(), url: z.string().url().optional() })).default([]),
    // reference(): un slug que no existe rompe el build (mejor que publicar un enlace roto).
    relacionados: z.array(reference('ayuda')).default([]),
  }),
});

export const collections = { ayuda };
