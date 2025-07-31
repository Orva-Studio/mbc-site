export default async function RootElement({ children }) {
  const data = await getData();

  return (
    <html lang="en">
      <head>
        <title>{data.title}</title>
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
