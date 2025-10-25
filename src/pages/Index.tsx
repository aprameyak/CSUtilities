import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { DSAPractice } from '@/components/DSAPractice';
import { UniversityRankings } from '@/components/UniversityRankings';
import { CompanyRankings } from '@/components/CompanyRankings';
import { Jobs } from '@/components/Jobs';
import { Hackathons } from '@/components/Hackathons';
import { Support } from '@/components/Support';
import { SEOHead, getDSAStructuredData, getUniversityStructuredData, getCompanyStructuredData } from '@/components/SEOHead';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dsa');

  const getSEOData = () => {
    switch (activeTab) {
      case 'dsa':
        return {
          title: 'DSA Practice Hub - Master Data Structures & Algorithms',
          description: 'Practice curated LeetCode problems organized by difficulty and company tags. Perfect for technical interview preparation.',
          keywords: 'DSA practice, leetcode problems, coding interview, data structures, algorithms, technical interview prep',
          structuredData: getDSAStructuredData()
        };
      case 'universities':
        return {
          title: 'Top Computer Science Universities - Rankings & Profiles',
          description: 'Explore top Computer Science universities worldwide with detailed rankings, scores, and profiles.',
          keywords: 'computer science universities, CS rankings, top universities, computer science programs, university rankings',
          structuredData: getUniversityStructuredData()
        };
      case 'companies':
        return {
          title: 'Tech Company Rankings - Top Companies for CS Professionals',
          description: 'Discover top technology companies ranked by prestige and desirability for computer science professionals.',
          keywords: 'tech companies, company rankings, tech jobs, software companies, technology careers',
          structuredData: getCompanyStructuredData()
        };
      case 'jobs':
        return {
          title: 'Computer Science Jobs & Internships',
          description: 'Find the latest computer science jobs, internships, and new grad positions at top tech companies.',
          keywords: 'CS jobs, computer science internships, tech careers, software engineering jobs, new grad positions',
          structuredData: null
        };
      case 'hackathons':
        return {
          title: 'Computer Science Hackathons & Competitions',
          description: 'Discover upcoming hackathons, coding competitions, and tech events for computer science students and professionals.',
          keywords: 'hackathons, coding competitions, tech events, programming contests, computer science events',
          structuredData: null
        };
      default:
        return {
          title: 'CSUtilities - Computer Science Learning Platform',
          description: 'Master Data Structures & Algorithms with curated LeetCode problems. Explore top Computer Science universities and tech company rankings.',
          keywords: 'computer science, DSA, leetcode, university rankings, company rankings, tech interviews',
          structuredData: null
        };
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dsa':
        return <DSAPractice />;
      case 'universities':
        return <UniversityRankings />;
      case 'companies':
        return <CompanyRankings />;
      case 'jobs':
        return <Jobs />;
      case 'hackathons':
        return <Hackathons />;
      case 'support':
        return <Support />;
      default:
        return <DSAPractice />;
    }
  };

  const seoData = getSEOData();

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        structuredData={seoData.structuredData}
      />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
