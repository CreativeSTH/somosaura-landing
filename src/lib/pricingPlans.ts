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
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basico',
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
