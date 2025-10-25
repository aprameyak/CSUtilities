"use client";

import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { DSAPractice } from '@/components/DSAPractice';
import { UniversityRankings } from '@/components/UniversityRankings';
import { CompanyRankings } from '@/components/CompanyRankings';
import { Jobs } from '@/components/Jobs';
import { Hackathons } from '@/components/Hackathons';
import { Support } from '@/components/Support';
import { getDSAStructuredData, getUniversityStructuredData, getCompanyStructuredData } from '@/lib/metadata';

export default function Home() {
  const [activeTab, setActiveTab] = useState('dsa');

  const getStructuredData = () => {
    switch (activeTab) {
      case 'dsa':
        return getDSAStructuredData();
      case 'universities':
        return getUniversityStructuredData();
      case 'companies':
        return getCompanyStructuredData();
      default:
        return null;
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

  const structuredData = getStructuredData();

  return (
    <div className="min-h-screen bg-background">
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-8">
        {renderContent()}
      </main>
    </div>
  );
}
