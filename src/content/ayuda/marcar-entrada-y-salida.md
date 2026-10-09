---
titulo: '¿Cómo marcan entrada y salida mis empleados?'
categoria: equipo-y-turnos
resumen: 'En la caja, con el botón Marcar asistencia del punto de venta o de la pantalla de caja en pausa. El empleado escribe su PIN y AURA decide si es entrada o salida, con la hora del servidor.'
palabrasClave: ['marcar asistencia', 'marcar entrada', 'marcar salida', 'reloj', 'checador', 'pin', 'asistencia', 'llegada']
orden: 3
revisado: 2026-10-05
relacionados: ['registrar-empleados-y-pin', 'corregir-asistencia', 'como-calcula-aura-recargos']
---

**La respuesta corta:** en el **Punto de venta** pulsa **Marcar asistencia** (abajo a la izquierda del catálogo), el empleado escribe su **PIN de marcación** y pulsa **Marcar**. AURA decide sola si es una entrada o una salida.

## Dónde se marca

- **En el punto de venta:** el botón **Marcar asistencia** está siempre visible, sin importar quién tenga la sesión abierta.
- **Con la caja en pausa:** debajo de **Reanudar** está el enlace **Marcar asistencia**. Así un empleado puede marcar sin que el cajero tenga que reanudar la caja.

No hace falta que el empleado tenga usuario de AURA: lo identifica su PIN.

## Qué pasa al marcar

- Si no estaba adentro, se registra la **entrada**. Si ya estaba adentro, se registra la **salida** y AURA muestra cuánto tiempo trabajó.
- La hora es la del servidor de AURA, no la del computador de la caja, así que cambiar la hora del equipo no la altera.
- La jornada queda en la **sucursal de la caja** donde se marcó la entrada.
- El aviso de confirmación con el nombre y la hora se cierra solo a los pocos segundos.

## Mensajes que puedes ver

- **"PIN inválido"**: el PIN no corresponde a ningún empleado activo. Revisa que sea el PIN de marcación y no el de la caja.
- **"Ya marcaste hace un momento"**: se marcó dos veces seguidas en menos de dos minutos; la segunda no cuenta.
- **"Demasiados intentos, espera un minuto"**: se escribieron 5 PIN errados seguidos en esa caja. Espera un minuto y vuelve a intentar.
- **Sin internet:** marcar asistencia necesita conexión. Hazlo cuando vuelva; si se pasó la hora, el administrador puede agregar la jornada a mano.

## Si alguien olvida marcar la salida

Si una entrada queda abierta más de 16 horas, la próxima vez que esa persona marque AURA cierra la jornada anterior como **Sin salida** (para que el administrador la corrija) y registra una entrada nueva.
