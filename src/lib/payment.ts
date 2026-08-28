export function computeChange(total: number, received: number): number {
  return Math.max(0, received - total);
}

/** Sugiere un monto recibido redondo, siempre por encima del total, para que el demo tenga una devuelta que mostrar sin que el visitante tenga que escribir nada. */
export function suggestReceived(total: number): number {
  if (total <= 0) return 0;
  return Math.ceil((total + 1) / 10000) * 10000;
}
