import redirectMap from './_redirect-map.json';

// Real static asset extensions — never rewrite these.
const ASSET_RE = /\.(?:css|js|mjs|json|xml|txt|svg|png|jpe?g|gif|webp|avif|ico|pdf|woff2?|ttf|otf|eot|mp4|webm|mp3|zip|gz)$/i;
// System / verification files that must be served as-is.
const SKIP_RE = /^\/(?:404\.html|google[0-9a-f]+\.html|robots\.txt|sitemap\.xml|_routes\.json|_headers|_redirects)$/i;

/**
 * Returns a canonical path (with optional query) to 301-redirect to, or null.
 * Handles the legacy URL shapes Google still remembers from the old flat site:
 *   /brand/products/{slug}(.html)  -> /brand/products/{category}/{slug}
 *   /brand/support/{removed-id}    -> /brand/support/
 *   /path/index.html               -> /path/
 *   /path.html                     -> /path
 *   /brands/{brand}/...            -> /{brand}/...
 */
function computeRedirect(pathname, search) {
  if (SKIP_RE.test(pathname)) return null;
  if (ASSET_RE.test(pathname)) return null;

  let p = pathname;
  let changed = false;
  const isDirIndex = /\/index\.html$/i.test(p);
  if (isDirIndex) {
    p = p.replace(/\/index\.html$/i, '/');
    changed = true;
  } else if (/\.html$/i.test(p)) {
    p = p.slice(0, -5);
    changed = true;
  }

  const clean = p.replace(/\/+$/, '') || '/';

  // explicit legacy map (flat product / removed article)
  if (Object.prototype.hasOwnProperty.call(redirectMap, clean)) {
    return redirectMap[clean] + search;
  }

  // /brands/{brand}/... -> /{brand}/...  (but keep the /brands/ list page)
  const m = clean.match(/^\/brands\/(.+)$/);
  if (m) {
    const rest = m[1];
    const tail = pathname.endsWith('/') ? '/' : '';
    return '/' + rest + tail + search;
  }

  if (changed) {
    if (isDirIndex) return (clean === '' ? '/' : clean + '/') + search;
    return (clean === '' ? '/' : clean) + search;
  }
  return null;
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const method = request.method;

  if (method === 'GET' || method === 'HEAD') {
    const target = computeRedirect(url.pathname, url.search);
    if (target) {
      return Response.redirect(url.origin + target, 301);
    }
  }

  const response = await context.next();
  const path = url.pathname;

  if (path.endsWith('.css')) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'text/css; charset=utf-8');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }
  if (path.endsWith('.js')) {
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/javascript; charset=utf-8');
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  }

  return response;
}
