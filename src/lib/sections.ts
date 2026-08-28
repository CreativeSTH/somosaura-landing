export type Accent = 'violet' | 'teal' | 'pink' | 'blue' | 'orange' | 'amber';
export type BadgeTone = 'positive' | 'neutral' | 'info';

export interface FeatureCardData {
  /** Nombre de ícono de src/components/Icon.astro (no emoji). */
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
      { icon: 'shopping-bag', title: 'Ventas de hoy', value: '$2.380', badgeText: '+18%', badgeTone: 'positive' },
      { icon: 'trending-up', title: 'Total del mes', value: '$4.930.000', sparkline: [3, 5, 4, 7, 6, 9, 8, 10] },
      { icon: 'package', title: 'Productos activos', value: '7' },
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
        icon: 'truck',
        title: 'Sebastian Torres · Calle 123 #45-67',
        value: 'En camino',
        badgeText: 'Nuevo → En camino',
        badgeTone: 'info',
      },
      { icon: 'bell', title: 'Aviso en tiempo real', value: 'El cliente lo ve al instante', badgeText: 'En vivo', badgeTone: 'positive' },
      { icon: 'check-circle', title: 'María Gómez · El Poblado', value: 'Entregado', badgeText: 'Completado', badgeTone: 'positive' },
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
      { icon: 'clipboard-list', title: 'Monello por kilo', value: 'Agregado hoy', badgeText: 'Pendiente', badgeTone: 'neutral' },
      { icon: 'clipboard-list', title: 'Churu', value: 'Agregado hoy', badgeText: 'Pedido', badgeTone: 'info' },
      { icon: 'check-circle', title: 'Monello cachorros', value: 'Stock actualizado', badgeText: 'Ingresado', badgeTone: 'positive' },
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
      { icon: 'credit-card', title: 'Métodos activos', value: 'QR · Nequi · PSE · Tarjeta' },
      { icon: 'check-circle', title: 'Pago confirmado', value: '$45.000', badgeText: 'Automático', badgeTone: 'positive' },
      { icon: 'zap', title: 'Confirmación automática', value: 'Sin marcar nada a mano', badgeText: 'Webhook', badgeTone: 'info' },
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
      { icon: 'palette', title: 'Plantilla activa', value: 'Atelier' },
      { icon: 'store', title: 'Tienda online', value: 'Activa', badgeText: 'Publicada', badgeTone: 'positive' },
      { icon: 'refresh-cw', title: 'Catálogo', value: 'Se actualiza con tu stock', badgeText: 'Automático', badgeTone: 'positive' },
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
    cards: [
      { icon: 'receipt', title: 'Facturación electrónica', value: 'Próximamente', badgeText: 'En camino', badgeTone: 'neutral' },
      { icon: 'clock', title: 'Cumplimiento DIAN', value: 'En desarrollo' },
      { icon: 'receipt', title: 'Lanzamiento', value: 'Muy pronto' },
    ],
  },
];
