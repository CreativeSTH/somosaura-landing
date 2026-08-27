export interface IntersectionTracker {
  /**
   * Devuelve true solo la primera vez que `id` pasa de no-intersectando a
   * intersectando — es decir, cada vez que la sección reingresa a pantalla,
   * sea scrolleando hacia abajo o hacia arriba. Salir de pantalla nunca
   * dispara un reveal, solo "rearma" el estado para el próximo reingreso.
   */
  shouldReveal(id: string, isIntersecting: boolean): boolean;
}

export function createIntersectionTracker(): IntersectionTracker {
  const currentlyIntersecting = new Set<string>();

  return {
    shouldReveal(id: string, isIntersecting: boolean): boolean {
      if (!isIntersecting) {
        currentlyIntersecting.delete(id);
        return false;
      }
      if (currentlyIntersecting.has(id)) {
        return false;
      }
      currentlyIntersecting.add(id);
      return true;
    },
  };
}
