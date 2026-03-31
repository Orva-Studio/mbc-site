export default async function RootElement({ children }: { children: React.ReactNode }) {
  const data = await getData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>
        <meta name="description" content="Personal blog of Richard Oliver Bray — developer educator, content creator, and full stack developer sharing processes and thoughts on educating developers through video." />
        <meta name="keywords" content="developer content, developer advocacy, technical writing, developer marketing, developer relations, devrel" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://robray.dev/" />
        <meta property="og:title" content="Richard Oliver Bray" />
        <meta property="og:description" content="Personal blog of Richard Oliver Bray — developer educator, content creator, and full stack developer sharing processes and thoughts on educating developers through video." />
        <meta property="og:image" content="https://robray.dev/images/profile_pic.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://robray.dev/" />
        <meta property="twitter:title" content="Richard Oliver Bray" />
        <meta property="twitter:description" content="Personal blog of Richard Oliver Bray — developer educator, content creator, and full stack developer sharing processes and thoughts on educating developers through video." />
        <meta property="twitter:image" content="https://robray.dev/images/profile_pic.png" />
        
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&family=Fugaz+One&display=swap" rel="stylesheet" />
      </head>
      <body data-version="1.0">
        {children}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "8c41872b55bd42259fc884555a56acd7"}'>
        </script>
        <script
            id="counterscale-script"
            data-site-id="robray-dev"
            src="https://counterscale.richardbray89.workers.dev/tracker.js"
            defer>
        </script>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    title: 'Richard Oliver Bray',
    headline: 'Richard Oliver Bray',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
