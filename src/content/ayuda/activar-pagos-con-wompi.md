---
titulo: '¿Cómo activo los pagos con Wompi en mi negocio?'
categoria: ventas-y-caja
resumen: 'Con tu propia cuenta de Wompi, pegas sus 4 llaves en AURA y activas la pasarela. Desde ese momento tu caja cobra con QR y Nequi, y el dinero llega a tu cuenta.'
palabrasClave: ['Wompi', 'pasarela de pago', 'QR', 'Nequi', 'Bancolombia', 'llaves', 'llave pública', 'llave privada', 'activar pagos', 'cobrar con QR']
orden: 6
revisado: 2026-10-04
fuentes:
  - texto: 'Wompi — Ambientes y llaves'
    url: 'https://docs.wompi.co/docs/colombia/ambientes-y-llaves/'
relacionados: ['cobrar-con-qr-o-nequi']
---

**La respuesta corta:** necesitas una cuenta de comercio en **Wompi** a nombre de tu negocio. Copia sus 4 llaves de **producción** en **Configuración › Pagos con Wompi**, pulsa **Guardar credenciales** y enciende **Wompi activo**. Tu caja empieza a ofrecer **Pagar con QR** y **Pagar con Nequi**.

## ¿Qué es Wompi y quién recibe el dinero?

Wompi es la pasarela de pagos de Bancolombia. **Cada negocio usa su propia cuenta de Wompi**, vinculada a su propia cuenta bancaria: el dinero de tus ventas va directo de Wompi a tu cuenta, nunca pasa por AURA. Las comisiones y los tiempos de desembolso son los de tu contrato con Wompi; consúltalos en tu panel de comercio.

## Paso 1: crea tu cuenta de Wompi

Regístrate en **comercios.wompi.co** y completa la verificación de tu negocio y tu cuenta bancaria. Wompi te da dos ambientes: **pruebas (sandbox)** y **producción**. Para cobrar dinero real necesitas las llaves de **producción**.

## Paso 2: copia tus 4 llaves

En tu panel de Wompi, busca las llaves de producción. Son cuatro y cada una empieza distinto:

- **Llave pública:** empieza por `pub_prod_`
- **Llave privada:** empieza por `prv_prod_`
- **Llave secreta de eventos:** empieza por `prod_events_`
- **Llave de integridad:** empieza por `prod_integrity_`

Las llaves privada, de eventos y de integridad son secretas: no las compartas por chat ni correo. AURA las guarda cifradas.

## Paso 3: pégalas en AURA y activa

1. Ve a **Configuración › Pagos con Wompi**.
2. Pega las 4 llaves en **Credenciales**.
3. En **Métodos habilitados**, deja encendidos **QR** y **Nequi** (o solo el que quieras ofrecer).
4. Pulsa **Guardar credenciales**.
5. En **Activación**, enciende **Wompi activo**.

Al activarlo, AURA crea solos los medios de pago **Wompi - QR** y **Wompi - NEQUI** en **Métodos de pago**, para que esas ventas queden identificadas en la caja y en los reportes.

## ¿Puedo cambiar los métodos después?

Sí. Cambia los interruptores de **Métodos habilitados** y pulsa **Guardar credenciales**. Por seguridad, AURA no muestra las llaves secretas guardadas, así que para guardar cualquier cambio tienes que volver a pegar las 4 llaves.

## ¿Y PSE o tarjeta de crédito?

Aparecen en **Métodos habilitados**, pero hoy el punto de venta solo cobra con **QR** y **Nequi**. PSE y tarjeta quedan listos para la tienda online.

## ¿Cómo lo desactivo?

Apaga **Wompi activo**. AURA te pide confirmar, porque desde ese momento la caja deja de ofrecer QR y Nequi. Tus llaves quedan guardadas para volver a activarlo cuando quieras.
