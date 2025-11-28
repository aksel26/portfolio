import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  siteName?: string;
  author?: string;
  themeColor?: string;
  canonical?: string;
  noindex?: boolean;
}

export default function SEO({ 
  title = '프론트엔드 개발자 포트폴리오', 
  description = '창의적이고 혁신적인 웹 경험을 만드는 프론트엔드 개발자입니다',
  keywords = '프론트엔드, 개발자, 포트폴리오, React, JavaScript',
  image = '/og-image.png',
  url = window.location.href,
  type = 'website',
  siteName = '프론트엔드 개발자 포트폴리오',
  author = '프론트엔드 개발자',
  themeColor = '#4f46e5',
  canonical,
  noindex = false
}: SEOProps) {
  const siteTitle = title === '프론트엔드 개발자 포트폴리오' ? title : `${title} | 프론트엔드 개발자 포트폴리오`;
  const currentUrl = canonical || url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content={themeColor} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content={author} />
    </Helmet>
  );
}
