export type IntersectionTransition = 'entered' | 'exited' | 'none';

export interface IntersectionTracker {
  /**
   * Actualiza el estado conocido de `id` y devuelve la transición que
   * acaba de ocurrir: 'entered' la primera vez que pasa a estar
   * intersectando, 'exited' la primera vez que deja de estarlo, 'none'
   * si no hubo cambio respecto al último `update()` para ese id.
   */
  update(id: string, isIntersecting: boolean): IntersectionTransition;
}

export function createIntersectionTracker(): IntersectionTracker {
  const currentlyIntersecting = new Set<string>();

  return {
    update(id: string, isIntersecting: boolean): IntersectionTransition {
      const wasIntersecting = currentlyIntersecting.has(id);

      if (isIntersecting && !wasIntersecting) {
        currentlyIntersecting.add(id);
        return 'entered';
      }
      if (!isIntersecting && wasIntersecting) {
        currentlyIntersecting.delete(id);
        return 'exited';
      }
      return 'none';
    },
  };
}
