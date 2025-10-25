import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object;
}

export const SEOHead = ({
  title = "CSUtilities - Computer Science Learning Platform",
  description = "Master Data Structures & Algorithms with curated LeetCode problems. Explore top Computer Science universities and tech company rankings.",
  keywords = "computer science, DSA, leetcode, university rankings, company rankings, tech interviews, programming, algorithms, data structures",
  canonicalUrl = "https://csutilities.com",
  ogImage = "https://csutilities.com/og-image.png",
  structuredData
}: SEOHeadProps) => {
  const fullTitle = title.includes('CSUtilities') ? title : `${title} | CSUtilities`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="CSUtilities" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined structured data for different sections
export const getDSAStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LearningResource",
  "name": "DSA Practice Hub - CSUtilities",
  "description": "Curated LeetCode problems organized by difficulty and company tags for computer science interview preparation",
  "educationalLevel": "Intermediate",
  "learningResourceType": "Practice Problems",
  "educationalUse": "Practice",
  "audience": {
    "@type": "Audience",
    "audienceType": "Computer Science Students and Professionals"
  },
  "provider": {
    "@type": "Organization",
    "name": "CSUtilities",
    "url": "https://csutilities.com"
  }
});

export const getUniversityStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Computer Science Universities",
  "description": "Comprehensive rankings of top Computer Science universities worldwide",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "EducationalOrganization",
        "name": "Massachusetts Institute of Technology",
        "url": "https://mit.edu"
      }
    }
  ]
});

export const getCompanyStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Top Tech Company Rankings",
  "description": "Rankings of technology companies by prestige and desirability for computer science professionals",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Organization",
        "name": "Google",
        "url": "https://google.com"
      }
    }
  ]
});

