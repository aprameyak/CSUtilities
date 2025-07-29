import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { DSAPractice } from '@/components/DSAPractice';
import { UniversityRankings } from '@/components/UniversityRankings';
import { CompanyRankings } from '@/components/CompanyRankings';

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
