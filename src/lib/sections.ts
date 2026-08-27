export type Accent = 'violet' | 'teal' | 'pink' | 'blue' | 'orange' | 'amber';

export interface SectionDef {
  id: string;
  eyebrow: string;
  title: string;
  copy: string;
  accent: Accent;
  badge?: string;
  visual: 'screenshot' | 'demo' | 'coming-soon';
  screenshotAlt: string;
}

export const sections: SectionDef[] = [
  {
    id: 'inicio',
    eyebrow: 'Sistema de administración de ventas',
    title: 'No es un POS. Es tu asistente de ventas.',
    copy: 'Un click para vender. Un click para saber cómo va tu negocio.',
    accent: 'violet',
    visual: 'screenshot',
    screenshotAlt: 'Dashboard general de AURA',
  },
  {
    id: 'punto-venta',
    eyebrow: 'Punto de venta',
    title: 'Vendé sin salir de la pantalla.',
    copy: 'Productos, domicilio, pedido y factura, todo en el mismo lugar.',
    accent: 'violet',
    visual: 'demo',
    screenshotAlt: 'Demo interactiva del punto de venta',
  },
  {
    id: 'domicilios',
    eyebrow: 'Domicilios',
    title: 'La entrega, sin salir de la venta.',
    copy: 'Se crea junto a la venta y avisa en vivo cuando cambia de estado.',
    accent: 'teal',
    visual: 'screenshot',
    screenshotAlt: 'Gestión de domicilios en AURA',
  },
  {
    id: 'pedidos',
    eyebrow: 'Pedidos',
    title: 'Ingresos que se confirman solos.',
    copy: 'El stock entra, el costo se actualiza, sin doble digitación.',
    accent: 'pink',
    visual: 'screenshot',
    screenshotAlt: 'Lista de pedidos en AURA',
  },
  {
    id: 'wompi',
    eyebrow: 'Pasarela Wompi',
    title: 'Cobrá con QR, Nequi, PSE o tarjeta.',
    copy: 'La venta se confirma sola cuando llega el pago. Nadie marca nada a mano.',
    accent: 'blue',
    visual: 'screenshot',
    screenshotAlt: 'Cobro con Wompi en AURA',
  },
  {
    id: 'tienda',
    eyebrow: 'Tienda online',
    title: 'Tu catálogo, siempre al día.',
    copy: 'Se arma solo con lo que tenés en stock — sin trabajo extra.',
    accent: 'orange',
    visual: 'screenshot',
    screenshotAlt: 'Tienda online de AURA',
  },
  {
    id: 'facturacion',
    eyebrow: 'Facturación electrónica',
    title: 'Facturación electrónica.',
    copy: 'Ya viene en camino — la construimos con la misma simplicidad.',
    accent: 'amber',
    badge: 'Próximamente',
    visual: 'coming-soon',
    screenshotAlt: 'Ilustración de facturación electrónica, próximamente',
  },
];
