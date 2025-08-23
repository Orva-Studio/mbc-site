export default async function RootElement({ children }: { children: React.ReactNode }) {
  const data = await getData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>
        <meta name="description" content="Learn how to create engaging developer content that drives adoption and builds community. A practical guide for developer advocates and technical content creators." />
        <meta name="keywords" content="developer content, developer advocacy, technical writing, developer marketing, developer relations, devrel" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://makebettercontent.dev/" />
        <meta property="og:title" content="Make Better Developer Content" />
        <meta property="og:description" content="Learn how to create engaging developer content that drives adoption and builds community. A practical guide for developer advocates and technical content creators." />
        <meta property="og:image" content="https://makebettercontent.dev/images/book_cover.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://makebettercontent.dev/" />
        <meta property="twitter:title" content="Make Better Developer Content" />
        <meta property="twitter:description" content="Learn how to create engaging developer content that drives adoption and builds community. A practical guide for developer advocates and technical content creators." />
        <meta property="twitter:image" content="https://makebettercontent.dev/images/book_cover.png" />
        
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body data-version="1.0">
        {children}
        <script 
          defer 
          src='https://static.cloudflareinsights.com/beacon.min.js' 
          data-cf-beacon='{"token": "8c41872b55bd42259fc884555a56acd7"}'>
        </script>
      </body>
    </html>
  );
}

const getData = async () => {
  const data = {
    title: 'Make Better Developer Content',
    headline: 'Make Better Developer Content',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
