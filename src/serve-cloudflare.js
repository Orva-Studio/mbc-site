export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Handle static assets first
    if (url.pathname.startsWith('/assets/') || 
        url.pathname.startsWith('/public/') ||
        url.pathname.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
      return env.ASSETS.fetch(request);
    }
    
    try {
      // Import the Waku entries and setup
      const { default: entries, loadModule, I: INTERNAL_setAllEnv, a: INTERNAL_setPlatformDataLoader, loadPlatformData } = await import('../entries.js');
      
      // Set up the environment
      INTERNAL_setAllEnv(env);
      INTERNAL_setPlatformDataLoader(loadPlatformData);
      
      // Handle RSC (React Server Component) requests
      if (url.pathname.startsWith('/RSC/')) {
        let rscPath = url.pathname.slice(5); // Remove '/RSC/' prefix
        // Remove .txt extension if present
        if (rscPath.endsWith('.txt')) {
          rscPath = rscPath.slice(0, -4);
        }
        const rscParams = url.searchParams;
        
        try {
          const response = await entries.handleRequest(
            {
              type: 'component',
              rscPath,
              rscParams,
              req: { headers: Object.fromEntries(request.headers.entries()) }
            },
            {
              renderRsc: async (entries) => {
                // Import React server rendering utilities
                const { renderToReadableStream } = await import('react-server-dom-webpack/server.edge');
                const stream = renderToReadableStream(entries);
                return new Response(stream, {
                  headers: {
                    'Content-Type': 'text/x-component',
                    'Cache-Control': 'no-cache'
                  }
                });
              },
              renderHtml: async () => {
                // HTML rendering not needed for RSC requests
                return new Response('HTML rendering not supported for RSC', { status: 400 });
              }
            }
          );
          
          return response || new Response('Not Found', { status: 404 });
        } catch (error) {
          console.error('RSC Error:', error);
          return new Response('RSC Error: ' + error.message, { status: 500 });
        }
      }
      
      // For all other requests, serve the main HTML
      const htmlResponse = await serveHTML(request, entries);
      return htmlResponse;
      
    } catch (error) {
      console.error('Error in Cloudflare Worker:', error);
      return new Response('Internal Server Error', { status: 500 });
    }
  }
};

async function serveHTML(request, entries) {
  // Import the static HTML from the build
  const { publicIndexHtml } = await import('../entries.js');
  
  return new Response(publicIndexHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=300'
    }
  });
}
