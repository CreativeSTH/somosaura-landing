export type Accent = 'violet' | 'teal' | 'pink' | 'blue' | 'orange' | 'amber';
export type BadgeTone = 'positive' | 'neutral' | 'info';

export interface FeatureCardData {
  icon: string;
  title: string;
  value: string;
  badgeText?: string;
  badgeTone?: BadgeTone;
  sparkline?: number[];
}

export interface SectionDef {
  id: string;
  eyebrow: string;
  /** Texto corto para el nav lateral — si no se define, usa `eyebrow` (útil cuando el eyebrow es una frase larga). */
  navLabel?: string;
  title: string;
  copy: string;
  accent: Accent;
  badge?: string;
  visual: 'cards' | 'demo';
  cards?: FeatureCardData[];
  dimmedCards?: boolean;
}

export const sections: SectionDef[] = [
  {
    id: 'inicio',
    eyebrow: 'Sistema de administración de ventas',
    navLabel: 'Inicio',
    title: 'No es un POS. Es tu asistente de ventas.',
    copy: 'Un click para vender. Un click para saber cómo va tu negocio.',
    accent: 'violet',
    visual: 'cards',
    cards: [
      { icon: '🛍️', title: 'Ventas de hoy', value: '$2.380', badgeText: '+18%', badgeTone: 'positive' },
      { icon: '📈', title: 'Total del mes', value: '$4.930.000', sparkline: [3, 5, 4, 7, 6, 9, 8, 10] },
      { icon: '📦', title: 'Productos activos', value: '7' },
    ],
  },
  {
    id: 'punto-venta',
    eyebrow: 'Punto de venta',
    title: 'Vendé sin salir de la pantalla.',
    copy: 'Productos, domicilio, pedido y factura, todo en el mismo lugar.',
    accent: 'violet',
    visual: 'demo',
  },
  {
    id: 'domicilios',
    eyebrow: 'Domicilios',
    title: 'La entrega, sin salir de la venta.',
    copy: 'Se crea junto a la venta y avisa en vivo cuando cambia de estado.',
    accent: 'teal',
    visual: 'cards',
    cards: [
      {
        icon: '🛵',
        title: 'Sebastian Torres · Calle 123 #45-67',
        value: 'En camino',
        badgeText: 'Nuevo → En camino',
        badgeTone: 'info',
      },
    ],
  },
  {
    id: 'pedidos',
    eyebrow: 'Pedidos',
    title: 'Ingresos que se confirman solos.',
    copy: 'El stock entra, el costo se actualiza, sin doble digitación.',
    accent: 'pink',
    visual: 'cards',
    cards: [
      { icon: '📋', title: 'Monello por kilo', value: 'Agregado hoy', badgeText: 'Pendiente', badgeTone: 'neutral' },
      { icon: '📋', title: 'Churu', value: 'Agregado hoy', badgeText: 'Pedido', badgeTone: 'info' },
    ],
  },
  {
    id: 'wompi',
    eyebrow: 'Pasarela Wompi',
    title: 'Cobrá con QR, Nequi, PSE o tarjeta.',
    copy: 'La venta se confirma sola cuando llega el pago. Nadie marca nada a mano.',
    accent: 'blue',
    visual: 'cards',
    cards: [
      { icon: '💳', title: 'Métodos activos', value: 'QR · Nequi · PSE · Tarjeta' },
      { icon: '✅', title: 'Pago confirmado', value: '$45.000', badgeText: 'Automático', badgeTone: 'positive' },
    ],
  },
  {
    id: 'tienda',
    eyebrow: 'Tienda online',
    title: 'Tu catálogo, siempre al día.',
    copy: 'Se arma solo con lo que tenés en stock — sin trabajo extra.',
    accent: 'orange',
    visual: 'cards',
    cards: [
      { icon: '🎨', title: 'Plantilla activa', value: 'Atelier' },
      { icon: '🟢', title: 'Tienda online', value: 'Activa', badgeText: 'Publicada', badgeTone: 'positive' },
    ],
  },
  {
    id: 'facturacion',
    eyebrow: 'Facturación electrónica',
    title: 'Facturación electrónica.',
    copy: 'Ya viene en camino — la construimos con la misma simplicidad.',
    accent: 'amber',
    badge: 'Próximamente',
    visual: 'cards',
    dimmedCards: true,
    cards: [{ icon: '🧾', title: 'Facturación electrónica', value: 'Próximamente', badgeText: 'En camino', badgeTone: 'neutral' }],
  },
];
