export function resolveInternalPathname(href: string, currentOrigin: string): string | null {
  try {
    const url = new URL(href, currentOrigin);
    if (url.origin !== currentOrigin) return null;
    return url.pathname;
  } catch {
    return null;
  }
}

interface InterceptParams {
  destinationPathname: string | null;
  currentPathname: string;
  target: string | null;
  noTransition: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  shiftKey: boolean;
  button: number;
}

export function shouldInterceptNavigation(params: InterceptParams): boolean {
  if (!params.destinationPathname) return false;
  if (params.destinationPathname === params.currentPathname) return false;
  if (params.target && params.target !== '_self') return false;
  if (params.noTransition) return false;
  if (params.ctrlKey || params.metaKey || params.shiftKey) return false;
  if (params.button !== 0) return false;
  return true;
}
