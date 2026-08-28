import type { Accent } from './sections';

export interface ComponentCategory {
  id: string;
  label: string;
  accent: Accent;
}

export interface ComponentCardData {
  category: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
}

export const categories: ComponentCategory[] = [
  { id: 'catalogo', label: 'Catálogo', accent: 'orange' },
  { id: 'clientes', label: 'Clientes', accent: 'teal' },
  { id: 'negocio', label: 'Ventas y negocio', accent: 'violet' },
];

export const components: ComponentCardData[] = [
  // Catálogo
  {
    category: 'catalogo',
    icon: 'package',
    title: 'Productos',
    tagline: 'Un solo catálogo, en todos lados',
    description: 'Cargá tu catálogo una sola vez y usalo en el punto de venta, la tienda online y los reportes, sin volver a digitarlo en ningún lado.',
  },
  {
    category: 'catalogo',
    icon: 'palette',
    title: 'Categorías y variantes',
    tagline: 'Sin duplicar por variante',
    description: 'Organizá tu catálogo por categorías y variantes (talla, sabor, color) sin tener que crear un producto distinto por cada combinación.',
  },
  {
    category: 'catalogo',
    icon: 'refresh-cw',
    title: 'Inventario en tiempo real',
    tagline: 'El stock se actualiza solo',
    description: 'Cada venta descuenta el stock al instante, en todas las sucursales, así nadie tiene que actualizar una hoja de cálculo a mano.',
  },
  {
    category: 'catalogo',
    icon: 'store',
    title: 'Múltiples bodegas',
    tagline: 'Un catálogo, varias bodegas',
    description: 'Administrá el stock de varias bodegas o sucursales desde el mismo catálogo, y movelo entre ellas sin perder el hilo.',
  },
  {
    category: 'catalogo',
    icon: 'tag',
    title: 'Precios y promociones',
    tagline: 'Sin tocar una hoja de cálculo',
    description: 'Definí precios por sucursal y armá descuentos o promociones puntuales sin depender de una hoja de cálculo aparte.',
  },
  {
    category: 'catalogo',
    icon: 'scan',
    title: 'Código de barras',
    tagline: 'Escaneá y listo',
    description: 'Escaneá con cualquier lector de códigos de barras y sumá productos a la venta al instante, sin buscarlos a mano.',
  },
  // Clientes
  {
    category: 'clientes',
    icon: 'users',
    title: 'Base de clientes',
    tagline: 'Qué compró, cuándo y cuánto',
    description: 'Guardá el historial de cada cliente: qué compró, cuándo y cuánto, para conocer mejor a quién le vendés todos los días.',
  },
  {
    category: 'clientes',
    icon: 'truck',
    title: 'Domicilios',
    tagline: 'La entrega, sin salir de la venta',
    description: 'El domicilio se crea junto con la venta y avisa en vivo cuando cambia de estado, desde "nuevo" hasta "entregado".',
  },
  {
    category: 'clientes',
    icon: 'bell',
    title: 'Notificaciones en vivo',
    tagline: 'El cliente se entera al instante',
    description: 'El cliente ve el estado de su pedido apenas cambia, sin que nadie tenga que llamarlo o escribirle a mano.',
  },
  {
    category: 'clientes',
    icon: 'message-circle',
    title: 'WhatsApp integrado',
    tagline: 'Sin cambiar de pantalla',
    description: 'Hablá con tus clientes por WhatsApp directo desde AURA, sin tener que abrir otra app ni perder el hilo de la venta.',
  },
  {
    category: 'clientes',
    icon: 'store',
    title: 'Tienda online',
    tagline: 'Compran solos, a cualquier hora',
    description: 'Tu catálogo queda siempre al día en tu tienda online, así tus clientes compran solos a cualquier hora del día.',
  },
  // Ventas y negocio
  {
    category: 'negocio',
    icon: 'shopping-bag',
    title: 'Punto de venta',
    tagline: 'Todo en el mismo lugar',
    description: 'Vendé sin salir de la pantalla: productos, domicilio, pedido y factura, todo en el mismo lugar, sin saltar entre módulos.',
  },
  {
    category: 'negocio',
    icon: 'credit-card',
    title: 'Pagos con Wompi',
    tagline: 'La venta se confirma sola',
    description: 'Cobrá con QR, Nequi, PSE o tarjeta. La venta se confirma sola apenas llega el pago, sin que nadie marque nada a mano.',
  },
  {
    category: 'negocio',
    icon: 'receipt',
    title: 'Facturación electrónica',
    tagline: 'Cumplimiento DIAN',
    description: 'Facturación electrónica con cumplimiento DIAN, sin hojas ni sellos. La construimos con la misma simplicidad que el resto de AURA.',
    badge: 'Próximamente',
  },
  {
    category: 'negocio',
    icon: 'trending-up',
    title: 'Reportes y dashboard',
    tagline: 'Todo en un vistazo',
    description: 'Ventas de hoy, del mes, por producto o por sucursal, todo en un vistazo, sin armar una hoja de cálculo aparte.',
  },
  {
    category: 'negocio',
    icon: 'lock',
    title: 'Roles y permisos',
    tagline: 'Cada uno ve lo suyo',
    description: 'Cada rol ve y hace solo lo que le corresponde. Vos decidís exactamente qué puede tocar cada cajero o administrador.',
  },
  {
    category: 'negocio',
    icon: 'clock',
    title: 'Cajero y turnos',
    tagline: 'Todo registrado automático',
    description: 'Apertura y cierre de caja, control de turnos por cajero, todo queda registrado automáticamente y sin planillas aparte.',
  },
];
