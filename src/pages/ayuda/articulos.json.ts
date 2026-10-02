import type { APIRoute } from 'astro';
import { cargarIndiceAyuda } from '../../lib/ayudaContenido';

/** Índice + HTML de cada artículo. Lo lee AURA (pos-frontend) para mostrar la ayuda dentro del sistema. */
export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await cargarIndiceAyuda()), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
