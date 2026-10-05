---
titulo: '¿Puedo trasladar productos entre bodegas? ¿Cómo lo hago?'
categoria: bodegas-e-inventario
resumen: 'Sí. Creas un traslado con el origen, el destino y los productos; el stock sale del origen al enviarlo y entra al destino cuando lo reciben.'
palabrasClave: ['traslado', 'trasladar', 'mover mercancía', 'transferencia', 'enviar a sucursal', 'reabastecer', 'en tránsito']
orden: 4
revisado: 2026-10-04
relacionados: ['recibir-un-traslado', 'bodega-principal-cedi', 'cargar-ajustar-y-revisar-stock']
---

**La respuesta corta:** sí. En **Configuración › Traslados** pulsa **Nuevo traslado**, elige de qué bodega sale y a cuál llega, agrega los productos con sus cantidades y pulsa **Enviar traslado**. Quien recibe la mercancía confirma lo que llegó.

## Paso a paso

1. Ve a **Configuración › Traslados** y pulsa **Nuevo traslado**.
2. En **Desde (origen)** elige la bodega que despacha, por ejemplo tu [bodega principal (CEDI)](/ayuda/bodega-principal-cedi).
3. En **Hacia (destino)** elige la bodega que recibe.
4. En **Agregar producto** busca cada producto. Solo aparecen los que tienen stock en el origen, con su cantidad disponible.
5. Escribe la cantidad de cada uno. No puedes enviar más de lo disponible.
6. Si quieres, agrega una nota (por ejemplo "Reposición semanal") y pulsa **Enviar traslado**.

AURA le pone un número (TR-1, TR-2…) y lo muestra en la pestaña **En tránsito**.

## ¿Qué significa "en tránsito"?

Que la mercancía ya salió del origen pero todavía no la han recibido. Mientras tanto:

- El stock **ya se descontó** del origen.
- **Todavía no suma** en el destino, así que el punto de venta del destino no puede venderla.

Cuando confirman la recepción, el traslado pasa a **Recibido** y el stock entra al destino.

## ¿Puedo cancelar un traslado?

Sí, mientras esté **en tránsito**: en la pestaña **En tránsito** pulsa **Cancelar** y confirma. Toda la mercancía vuelve a la bodega de origen. Un traslado que ya fue recibido no se cancela; si hace falta devolver mercancía, crea un traslado en sentido contrario.

## ¿Quién puede enviar y cancelar?

Los administradores, o los roles a los que les des el permiso **Traslados › Crear** (enviar) y **Traslados › Eliminar** (cancelar) en **Configuración › Roles**. Los cajeros, por defecto, solo ven y reciben.

## ¿Dónde veo el historial?

En la pestaña **Historial** de **Traslados**, con filtros por estado, bodega y fechas. Pulsa el número del traslado para ver quién lo envió, quién lo recibió y qué llegó de cada producto. Cada movimiento también aparece en el kardex del producto en **Inventario**, con el enlace **Ver traslado**.
