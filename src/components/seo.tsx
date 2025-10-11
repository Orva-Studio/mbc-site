interface SEOProps {
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  type?: 'website' | 'article';
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
  canonicalUrl?: string;
}

export function SEO({
  title,
  description,
  url,
  imageUrl,
  type = 'website',
  author,
  publishedDate,
  modifiedDate,
  canonicalUrl,
}: SEOProps) {
  const siteUrl = 'https://makebettercontent.dev';
  const fullUrl = `${siteUrl}${url}`;
  const canonical = canonicalUrl || fullUrl;
  const defaultImage = `${siteUrl}/images/book_cover.png`;
  const image = imageUrl || defaultImage;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Make Better Content" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Article specific meta tags */}
      {type === 'article' && (
        <>
          {author && <meta property="article:author" content={author} />}
          {publishedDate && <meta property="article:published_time" content={publishedDate} />}
          {modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
          <meta property="article:section" content="Developer Content" />
        </>
      )}
      
      {/* Additional meta tags */}
      <meta name="keywords" content="developer content, developer advocacy, technical writing, developer marketing, developer relations, devrel" />
      <meta name="author" content={author || "Richard Oliver Bray"} />
    </>
  );
}

interface StructuredDataProps {
  type: 'Article' | 'Blog' | 'WebPage';
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function StructuredData({
  type,
  title,
  description,
  url,
  imageUrl,
  author,
  publishedDate,
  modifiedDate,
}: StructuredDataProps) {
  const siteUrl = 'https://makebettercontent.dev';
  const fullUrl = `${siteUrl}${url}`;
  const image = imageUrl || `${siteUrl}/images/book_cover.png`;

  let structuredData: any = {
    '@context': 'https://schema.org',
    '@type': type,
    name: title,
    description: description,
    url: fullUrl,
    image: image,
  };

  if (type === 'Article') {
    structuredData = {
      ...structuredData,
      '@type': 'BlogPosting',
      headline: title,
      datePublished: publishedDate,
      dateModified: modifiedDate || publishedDate,
      author: {
        '@type': 'Person',
        name: author || 'Richard Oliver Bray',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Make Better Content',
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/favicon.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': fullUrl,
      },
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}