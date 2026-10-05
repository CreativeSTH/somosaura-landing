---
titulo: '¿Cómo cargo, ajusto y reviso el stock de una bodega?'
categoria: bodegas-e-inventario
resumen: 'El stock entra con la carga inicial, los pedidos a proveedor, los ajustes y los traslados. En Inventario ves las existencias por bodega y el kardex de cada producto.'
palabrasClave: ['stock', 'inventario', 'cargar stock', 'ajuste de inventario', 'kardex', 'historial de movimientos', 'existencias', 'stock mínimo']
orden: 6
revisado: 2026-10-04
relacionados: ['trasladar-productos-entre-bodegas', 'recibir-un-traslado', 'bodega-principal-cedi']
---

**La respuesta corta:** el stock de una bodega cambia con la carga inicial del producto, el ingreso de pedidos a proveedor, los ajustes manuales, las ventas, las devoluciones y los traslados. Todo queda en el kardex del producto, en **Configuración › Inventario**.

## Cargar stock

- **Al crear un producto:** en el formulario indica la cantidad inicial en cada bodega.
- **Al recibir un pedido a proveedor:** en **Lista de pedidos**, pulsa **Confirmar ingreso** y elige la bodega.
- **Con un traslado** desde otra bodega, por ejemplo tu CEDI.

## Ajustar stock

En **Inventario** pulsa **Ajustar stock** (o el botón de ajuste en la fila del producto) y elige el **Tipo de movimiento**:

- **Entrada:** suma unidades.
- **Salida:** resta unidades.
- **Ajuste:** fija la cantidad exacta, por ejemplo después de contar.

Escribe el motivo: queda en el kardex y en la auditoría.

## Revisar el kardex

En **Inventario**, pulsa **Ver kardex** en la fila del producto. Cada movimiento muestra la fecha, el tipo, la cantidad y el motivo:

- **Entrada / Salida / Ajuste:** movimientos manuales.
- **Venta / Devolución:** vienen de las ventas.
- **Traslado enviado / Traslado recibido:** salidas y entradas por traslados, con el enlace **Ver traslado**.
- **Traslado cancelado:** la mercancía que vuelve a la bodega de origen cuando se cancela un traslado.
- **Faltante de traslado:** lo que no llegó al recibir un traslado. No cambia la cantidad, es un registro.

## Stock mínimo y alertas

Con **Definir stock mínimo** eliges, por producto y bodega, a partir de qué cantidad quieres un aviso. Cuando una venta, un ajuste o un traslado deja el stock en ese mínimo o por debajo, AURA te avisa en **Alertas**.
