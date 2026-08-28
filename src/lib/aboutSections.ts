import type { SectionDef } from './sections';

export const aboutSections: SectionDef[] = [
  {
    id: 'que-es',
    eyebrow: '¿Qué es Aura?',
    navLabel: 'Qué es',
    title: 'Un solo lugar para tu negocio.',
    copy: 'Aura es un software de administración de punto comercial creado para simplificar la venta digital y la gestión diaria de los negocios. Con Aura podrás administrar ventas, facturación electrónica, inventario, clientes, envíos y reportes desde un solo lugar, de forma fácil, rápida y sin complicaciones.',
    accent: 'violet',
    visual: 'cards',
    cards: [
      { icon: 'shopping-bag', title: 'Ventas', value: 'Todo desde un solo lugar' },
      { icon: 'package', title: 'Inventario', value: 'Se actualiza solo' },
      { icon: 'truck', title: 'Envíos', value: 'Seguimiento en vivo' },
    ],
  },
  {
    id: 'historia',
    eyebrow: 'Nuestra historia',
    navLabel: 'Historia',
    title: 'Nació en Medellín, para comerciantes reales.',
    copy: 'Aura nació en Medellín de la mano de un paisa berraco apasionado por la tecnología, con años de experiencia desarrollando software para empresas como Mercado Libre y Grupo EMI. Después de trabajar en grandes plataformas y conocer las necesidades reales de los comerciantes, surgió una idea sencilla: crear una herramienta que realmente facilitara el trabajo de quienes todos los días sacan adelante sus negocios.',
    accent: 'pink',
    visual: 'cards',
    cards: [
      { icon: 'zap', title: 'Experiencia previa', value: 'Mercado Libre · Grupo EMI' },
      { icon: 'store', title: 'Origen', value: 'Medellín, Colombia' },
      { icon: 'clipboard-list', title: 'Motivación', value: 'Comerciantes reales' },
    ],
  },
  {
    id: 'filosofia',
    eyebrow: 'Nuestra filosofía',
    navLabel: 'Filosofía',
    title: 'Menos manual. Más vender.',
    copy: 'Creemos que administrar un punto comercial no debería requerir capacitaciones eternas, manuales interminables ni sistemas enredados. Por eso construimos una plataforma moderna, intuitiva y fácil de usar, para que dediques tu tiempo a vender, atender a tus clientes y hacer crecer tu negocio, no a aprender cómo funciona tu software.',
    accent: 'teal',
    visual: 'cards',
    cards: [
      { icon: 'check-circle', title: 'Cero capacitaciones eternas', value: 'Aprendés usándolo' },
      { icon: 'check-circle', title: 'Cero manuales interminables', value: 'Todo a la vista' },
      { icon: 'check-circle', title: 'Cero sistemas enredados', value: 'Una sola pantalla' },
    ],
  },
];
