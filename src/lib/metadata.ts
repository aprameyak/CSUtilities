import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'CSUtilities - Computer Science Learning Platform',
    template: '%s | CSUtilities'
  },
  description: 'Master Data Structures & Algorithms with curated LeetCode problems. Explore top Computer Science universities and tech company rankings. Perfect for technical interview preparation.',
  keywords: [
    'computer science',
    'DSA practice',
    'leetcode problems',
    'coding interview',
    'data structures',
    'algorithms',
    'technical interview prep',
    'university rankings',
    'company rankings',
    'tech interviews',
    'programming',
    'software engineering',
    'CS jobs',
    'computer science internships',
    'hackathons',
    'coding competitions'
  ],
  authors: [{ name: 'CSUtilities Team' }],
  creator: 'CSUtilities Team',
  publisher: 'CSUtilities',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://csutilities.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://csutilities.com',
    siteName: 'CSUtilities',
    title: 'CSUtilities - Computer Science Learning Platform',
    description: 'Master Data Structures & Algorithms with curated LeetCode problems. Explore top Computer Science universities and tech company rankings.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CSUtilities - Computer Science Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CSUtilities - Computer Science Learning Platform',
    description: 'Master Data Structures & Algorithms with curated LeetCode problems. Explore top Computer Science universities and tech company rankings.',
    images: ['/og-image.png'],
    creator: '@csutilities',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export const dsaMetadata: Metadata = {
  title: 'DSA Practice Hub - Master Data Structures & Algorithms',
  description: 'Practice curated LeetCode problems organized by difficulty and company tags. Perfect for technical interview preparation with 1000+ problems.',
  keywords: [
    'DSA practice',
    'leetcode problems',
    'coding interview',
    'data structures',
    'algorithms',
    'technical interview prep',
    'leetcode solutions',
    'coding practice',
    'algorithm problems'
  ],
  openGraph: {
    title: 'DSA Practice Hub - Master Data Structures & Algorithms',
    description: 'Practice curated LeetCode problems organized by difficulty and company tags. Perfect for technical interview preparation.',
    type: 'website',
  },
  twitter: {
    title: 'DSA Practice Hub - Master Data Structures & Algorithms',
    description: 'Practice curated LeetCode problems organized by difficulty and company tags. Perfect for technical interview preparation.',
  },
};

export const universityMetadata: Metadata = {
  title: 'Top Computer Science Universities - Rankings & Profiles',
  description: 'Explore top Computer Science universities worldwide with detailed rankings, scores, and profiles. Find the best CS programs.',
  keywords: [
    'computer science universities',
    'CS rankings',
    'top universities',
    'computer science programs',
    'university rankings',
    'best CS schools',
    'computer science education',
    'university profiles'
  ],
  openGraph: {
    title: 'Top Computer Science Universities - Rankings & Profiles',
    description: 'Explore top Computer Science universities worldwide with detailed rankings, scores, and profiles.',
    type: 'website',
  },
  twitter: {
    title: 'Top Computer Science Universities - Rankings & Profiles',
    description: 'Explore top Computer Science universities worldwide with detailed rankings, scores, and profiles.',
  },
};

export const companyMetadata: Metadata = {
  title: 'Tech Company Rankings - Top Companies for CS Professionals',
  description: 'Discover top technology companies ranked by prestige and desirability for computer science professionals. Find your dream tech job.',
  keywords: [
    'tech companies',
    'company rankings',
    'tech jobs',
    'software companies',
    'technology careers',
    'FAANG companies',
    'top tech companies',
    'tech company rankings'
  ],
  openGraph: {
    title: 'Tech Company Rankings - Top Companies for CS Professionals',
    description: 'Discover top technology companies ranked by prestige and desirability for computer science professionals.',
    type: 'website',
  },
  twitter: {
    title: 'Tech Company Rankings - Top Companies for CS Professionals',
    description: 'Discover top technology companies ranked by prestige and desirability for computer science professionals.',
  },
};

export const jobsMetadata: Metadata = {
  title: 'Computer Science Jobs & Internships',
  description: 'Find the latest computer science jobs, internships, and new grad positions at top tech companies. Start your tech career today.',
  keywords: [
    'CS jobs',
    'computer science internships',
    'tech careers',
    'software engineering jobs',
    'new grad positions',
    'tech internships',
    'computer science careers',
    'software developer jobs'
  ],
  openGraph: {
    title: 'Computer Science Jobs & Internships',
    description: 'Find the latest computer science jobs, internships, and new grad positions at top tech companies.',
    type: 'website',
  },
  twitter: {
    title: 'Computer Science Jobs & Internships',
    description: 'Find the latest computer science jobs, internships, and new grad positions at top tech companies.',
  },
};

export const hackathonsMetadata: Metadata = {
  title: 'Computer Science Hackathons & Competitions',
  description: 'Discover upcoming hackathons, coding competitions, and tech events for computer science students and professionals.',
  keywords: [
    'hackathons',
    'coding competitions',
    'tech events',
    'programming contests',
    'computer science events',
    'coding challenges',
    'tech competitions',
    'programming events'
  ],
  openGraph: {
    title: 'Computer Science Hackathons & Competitions',
    description: 'Discover upcoming hackathons, coding competitions, and tech events for computer science students and professionals.',
    type: 'website',
  },
  twitter: {
    title: 'Computer Science Hackathons & Competitions',
    description: 'Discover upcoming hackathons, coding competitions, and tech events for computer science students and professionals.',
  },
};

// Structured data for different sections
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
