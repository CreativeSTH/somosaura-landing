export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  audience: string;
  features: string[];
  /** Cosas que el plan explícitamente NO incluye — se muestran tachadas con ✕. */
  excluded?: string[];
  /** Nota corta debajo de la lista (excedentes, upsell, límites de documentos). */
  note?: string;
  highlight?: boolean;
  /**
   * UUID real del `Paquete` en pos-backend (pieza "Sistema de Paquetes/Planes"),
   * no el slug de `id`. Placeholder intencional, no un TODO perdido — se
   * reemplaza a mano por el UUID real una vez que alguien con permiso
   * PAQUETES:CREAR cree este paquete desde /paquetes en cada ambiente
   * (desarrollo/producción tienen UUIDs distintos, no hay forma de
   * conocerlos de antemano). Consumido por /prueba-gratis (pieza "Registro
   * público + prueba 20 días") para el formulario de signup.
   */
  paqueteId: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
    paqueteId: 'b42ef301-b23e-42b7-941d-243f30e8f619',
    name: 'POS Básico',
    price: 69900,
    audience: 'Tiendas pequeñas, misceláneas y negocios que entregan recibo POS o tirilla.',
    features: [
      'Ventas',
      'Inventario',
      'Productos',
      'Clientes',
      'Reportes básicos',
      'Impresora térmica',
      'Lector de código de barras',
      'Cajón monedero',
      'Pagos con Wompi',
    ],
    excluded: ['Facturación electrónica DIAN'],
    note: 'Actualizá a Facturación Electrónica por solo $69.900 adicionales/mes, cuando la DIAN te lo exija o tu negocio crezca.',
  },
  {
    id: 'profesional',
    paqueteId: 'ad32a5a9-fc35-4eb0-a035-7b3622d2e22c',
    name: 'POS Profesional',
    price: 139900,
    audience: 'Pet shops, ferreterías, veterinarias y minimercados.',
    features: [
      'Todo lo del plan Básico',
      'Facturación electrónica DIAN — hasta 300 documentos/mes',
      'Notas crédito',
      'Soporte prioritario',
    ],
    note: 'Si superás los 300 documentos DIAN en el mes, se cobra el excedente por documento.',
    highlight: true,
  },
  {
    id: 'empresarial',
    paqueteId: 'b623dc1f-c6d8-414d-9aec-f912a543e7cc',
    name: 'POS Empresarial',
    price: 219900,
    audience: 'Negocios con varias sucursales y equipos más grandes.',
    features: [
      'Todo lo del plan Profesional',
      'Multi-sucursal',
      'Usuarios ilimitados',
      'Roles avanzados',
      'Alertas',
      'Reportes avanzados',
      'Facturación electrónica DIAN — hasta 1.000 documentos/mes',
    ],
  },
];
