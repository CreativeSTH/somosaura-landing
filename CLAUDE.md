# CLAUDE.md

Landing page de marketing de **AURA** — sitio público en Astro para vender el producto a negocios nuevos. Independiente de `pos-backend`/`pos-frontend`/`pos-agent`. Documento de diseño: [`../docs/specs/2026-08-27-aura-landing-design.md`](../docs/specs/2026-08-27-aura-landing-design.md).

## Comandos

```bash
npm run dev      # http://localhost:4321
npm run build    # type-check + build estático a dist/
npm run test     # tests unitarios (Vitest, solo lógica pura)
```

## Git

⚠️ Mismo régimen que los otros repos del proyecto: solo se commitea y pushea a `develop`. `main` se mantiene vacía hasta que el usuario pida explícitamente el release — nunca abrir ni sugerir un PR `develop → main` de iniciativa propia.

## Motion

Nada de `GSAP ScrollTrigger` con `pin`/`scrub` — decisión explícita de diseño (ver spec). Todo el movimiento son timelines de entrada de una sola vez, disparadas por `src/lib/sectionObserver.ts`, y respetan `prefers-reduced-motion`.
