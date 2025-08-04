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
      const { default: entries, loadModule, INTERNAL_setAllEnv, INTERNAL_setPlatformDataLoader, loadPlatformData } = await import('../entries.js');
      
      // Set up the environment
      INTERNAL_setAllEnv(env);
      INTERNAL_setPlatformDataLoader(loadPlatformData);
      
      // Handle RSC (React Server Component) requests
      if (url.pathname.startsWith('/RSC/')) {
        // This would handle React Server Component requests
        // For now, return a basic response
        return new Response('RSC endpoint not implemented', { status: 501 });
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
