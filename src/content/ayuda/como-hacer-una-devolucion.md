---
titulo: '¿Cómo hago una devolución y qué pasa con la factura?'
categoria: ventas-y-caja
resumen: 'Puedes devolver todo o parte de una venta, reembolsar en efectivo, descontarlo de la deuda o dejarlo como saldo a favor. Si la venta tenía factura electrónica, AURA emite la nota crédito.'
palabrasClave: ['devolución', 'devolver', 'reembolso', 'nota crédito', 'saldo a favor', 'cambio', 'anular venta', 'cancelar venta']
orden: 3
revisado: 2026-10-02
relacionados: ['que-es-una-nota-credito', 'saldo-a-favor-del-cliente', 'ventas-a-credito-y-recibo-de-caja', 'factura-rechazada-por-la-dian']
---

**La respuesta corta:** abre la venta en **Ventas** (o en **Caja**), pulsa **Devolver**, elige qué productos y cuántas unidades se devuelven y cómo le devuelves el dinero al cliente. AURA registra la devolución, ajusta el inventario y, si la venta tenía factura electrónica, emite la **nota crédito** ante la DIAN por ti.

## ¿Puedo devolver solo una parte?

Sí. Puedes devolver **algunas unidades** de un producto, varios productos o la venta completa (con el botón **Devolver todo**). También puedes hacer varias devoluciones de la misma venta en días distintos, hasta devolver todo lo que se vendió. AURA calcula lo que se devuelve con el precio que el cliente realmente pagó, incluidos los descuentos y cupones de la venta.

## ¿Cómo le devuelvo el dinero al cliente?

Tienes tres formas, y puedes combinarlas en una misma devolución:

- **Efectivo:** sale de la caja como un egreso del turno abierto de la sucursal, así que el arqueo del cierre ya lo tiene en cuenta. Necesitas un turno abierto y efectivo suficiente en la caja.
- **Descuento a la deuda:** si la venta fue a crédito y todavía debe cuotas, lo devuelto se resta de lo que el cliente debe, empezando por la última cuota. No puedes descontar más de lo que debe.
- **Saldo a favor:** el valor queda como crédito del cliente para su próxima compra. En el punto de venta aparece como medio de pago **Saldo a favor** cuando eliges a ese cliente. Solo se puede usar con un cliente identificado (no con consumidor final) y no se entrega en efectivo después.

## ¿Qué pasa con el inventario?

Por cada producto decides si **vuelve al inventario** (lo normal) o **no vuelve**, por ejemplo porque llegó dañado o vencido. Si no vuelve, AURA no lo suma al stock y deja anotado el motivo en el historial del producto.

## ¿Y la factura electrónica?

Una factura electrónica aceptada por la DIAN **no se borra ni se anula a mano**: se corrige con una **nota crédito electrónica**. AURA la emite sola cuando registras la devolución, la numera aparte (NC1, NC2…) y la verás en **Facturación › Comprobantes** junto a tus facturas, con su PDF y su XML.

Ten en cuenta:

- Solo puedes devolver una venta cuya factura **ya fue aceptada por la DIAN**. Si todavía está en validación, la rechazaron o es una factura de contingencia que aún no se transmite, AURA te pedirá esperar a que quede aceptada.
- Si la DIAN rechaza la nota crédito, la devolución igual queda hecha (el inventario y el dinero ya se movieron). Verás la nota como rechazada en **Facturación** con un botón para reintentarla.
- Si la venta fue con **recibo**, no hay nota crédito: AURA genera solo el comprobante de devolución (DEV-1, DEV-2…).

## ¿Cuándo uso "Cancelar venta" y cuándo "Devolver"?

**Cancelar venta** es para corregir un error en el momento: una venta mal registrada que nunca se entregó. Solo está disponible si la venta no tiene devoluciones y no tiene una factura electrónica aceptada. En cualquier otro caso, usa **Devolver**: es lo que deja todo en regla, incluida la nota crédito.

## ¿Quién puede hacer devoluciones?

Quien tenga el permiso de **Devoluciones** las hace directamente. Si un cajero no lo tiene, AURA le pide el **PIN de un administrador** en ese momento, igual que para cancelar una venta. Las devoluciones necesitan conexión a internet: si la caja está sin conexión, AURA te avisa que las hagas cuando vuelva.
