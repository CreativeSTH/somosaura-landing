---
titulo: '¿Cómo calcula AURA las horas extra y los recargos?'
categoria: equipo-y-turnos
resumen: 'Con las jornadas, el horario y el salario de cada empleado, AURA calcula en pesos los recargos y las horas extra con la ley vigente en cada fecha. No liquida la nómina.'
palabrasClave: ['recargos', 'horas extra', 'recargo nocturno', 'dominical', 'festivo', 'reporte de recargos', 'valor hora', '42 horas', 'reforma laboral', 'nómina', 'exportar csv']
orden: 5
revisado: 2026-10-05
fuentes:
  - texto: 'Ley 2101 de 2021 (reducción de la jornada laboral), art. 3'
  - texto: 'Ley 2466 de 2025 (reforma laboral), arts. 10 y 14 — Alcaldía de Bogotá, SISJUR'
    url: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=181933'
  - texto: 'Código Sustantivo del Trabajo, arts. 162 y 168'
  - texto: 'Ministerio del Trabajo, concepto 16177 de 2023 (valor de la hora ordinaria)'
  - texto: 'Actualícese — ABC de horas extra y recargos'
    url: 'https://actualicese.com/horas-extra-y-recargos/'
relacionados: ['marcar-entrada-y-salida', 'corregir-asistencia', 'armar-horario-semanal']
---

**La respuesta corta:** en **Configuración › Reporte de recargos** eliges el período y pulsas **Calcular**. AURA toma las jornadas que marcaron tus empleados, su horario programado y su salario, y te dice cuántas horas nocturnas, dominicales, festivas y extra trabajó cada uno y **cuánto valen en pesos**, con la regla de la ley que estaba vigente cada día.

## Qué calcula y qué no

AURA calcula **solo los recargos y las horas extra**. **No** liquida la nómina: no calcula el salario básico, la seguridad social, las prestaciones sociales ni el descanso compensatorio. El reporte es un insumo para tu contador o para quien haga la nómina.

## El valor de la hora

Valor hora = salario mensual ÷ horas del mes. Las horas del mes salen de la jornada máxima semanal: **42 horas desde el 15 de julio de 2026**, que dan **210 horas** al mes (antes, con 44 horas, eran 220). Por ejemplo, con un salario de $2.100.000 la hora vale $10.000.

## Los porcentajes

| Concepto | Porcentaje |
|---|---|
| Recargo nocturno | 35 % |
| Hora extra diurna | 25 % |
| Hora extra nocturna | 75 % |
| Dominical o festivo | 80 % hasta el 30 de junio de 2026; **90 % desde el 1 de julio de 2026**; 100 % desde el 1 de julio de 2027 |

- **Horario nocturno:** de **7:00 p. m. a 6:00 a. m.** desde el 25 de diciembre de 2025 (antes empezaba a las 9:00 p. m.).
- **Se suman:** una hora nocturna en domingo vale 35 % + el recargo dominical; una extra nocturna en festivo, 75 % + el recargo dominical.
- Los **festivos** son los 18 del calendario colombiano; AURA los calcula solo cada año.
- Si una jornada cruza la medianoche o un cambio de ley, cada parte se calcula con la regla de su día.

## Cuándo una hora es extra

Una hora cuenta como **extra** solo si se cumplen las dos cosas:

1. En la semana (de lunes a domingo) el empleado trabajó **más que la jornada máxima** (42 horas).
2. Esa hora la trabajó **fuera de su turno programado**. Los días sin turno programado, todo lo trabajado cuenta como fuera del turno.

AURA toma como extra lo más tardío de la semana hasta completar el exceso. Por eso es importante tener el **horario** al día: si un empleado se queda una hora más y no estaba programado, esa hora puede ser extra; si estaba programado, no.

Los empleados con **Genera horas extra** apagado (cargos de dirección, confianza y manejo) nunca generan horas extra, solo recargos nocturnos y dominicales.

AURA también te avisa cuando alguien pasa de **2 horas extra en un día** o de **12 en la semana**, que es el límite legal.

## Lo que debes tener en cuenta

- Solo cuentan las jornadas **cerradas**. Una jornada **Sin salida** no suma hasta que la corrijas en **Asistencia**.
- Se usa el **salario actual** de cada empleado. Si le cambiaste el salario a mitad del período, el reporte usa el nuevo para todo el período.
- La hora ordinaria diurna no se paga aparte (ya está en el salario), por eso el reporte no le pone valor.
- El filtro de sucursal muestra solo lo trabajado en esa sede, pero las horas extra se calculan con todo lo que el empleado trabajó en la semana.

## Ver el detalle y exportar

Pulsa la flecha al lado de cada empleado para ver, día por día, los tramos con recargo: horario, horas, tipo, porcentaje y valor. Con **Exportar CSV** descargas el reporte (una fila por empleado y tipo de hora) para abrirlo en Excel o enviárselo a tu contador.
