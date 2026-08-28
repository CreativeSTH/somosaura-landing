const ACCENT_BY_PATHNAME: Record<string, string> = {
  '/': '--accent-violet',
  '/que-es-aura': '--accent-teal',
  '/nuestro-software': '--accent-blue',
  '/planes': '--accent-amber',
  '/politica-de-privacidad': '--accent-pink',
};

const DEFAULT_ACCENT = '--accent-violet';

export function getTransitionAccentVar(pathname: string): string {
  return ACCENT_BY_PATHNAME[pathname] ?? DEFAULT_ACCENT;
}
