import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { DSAPractice } from '@/components/DSAPractice';
import { UniversityRankings } from '@/components/UniversityRankings';
import { CompanyRankings } from '@/components/CompanyRankings';
import { Jobs } from '@/components/Jobs';
import { Hackathons } from '@/components/Hackathons';
import { Support } from '@/components/Support';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dsa');

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pb-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
