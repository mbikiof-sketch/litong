export async function onRequest(context) {
  const response = await context.next();
  const url = new URL(context.request.url);
  const path = url.pathname;

  if (path.endsWith('.css')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'text/css; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  if (path.endsWith('.js')) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'application/javascript; charset=utf-8');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }

  return response;
}