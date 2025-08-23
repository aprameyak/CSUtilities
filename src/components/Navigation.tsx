import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code, GraduationCap, Building2, HelpCircle, Briefcase } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
            CS Utilities
          </h1>
        </div>
        
        <nav className="flex items-center space-x-2">
          <Button
            variant={activeTab === 'dsa' ? 'default' : 'ghost'}
            onClick={() => onTabChange('dsa')}
            className="flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            DSA Practice
          </Button>
          
          <Button
            variant={activeTab === 'universities' ? 'default' : 'ghost'}
            onClick={() => onTabChange('universities')}
            className="flex items-center gap-2"
          >
            <GraduationCap className="h-4 w-4" />
            Universities
          </Button>
          
          <Button
            variant={activeTab === 'companies' ? 'default' : 'ghost'}
            onClick={() => onTabChange('companies')}
            className="flex items-center gap-2"
          >
            <Building2 className="h-4 w-4" />
            Company Rankings
          </Button>
          
          <Button
            variant={activeTab === 'internships' ? 'default' : 'ghost'}
            onClick={() => onTabChange('internships')}
            className="flex items-center gap-2"
          >
            <Briefcase className="h-4 w-4" />
            Internships
          </Button>
          
          <Button
            variant={activeTab === 'support' ? 'default' : 'ghost'}
            onClick={() => onTabChange('support')}
            className="flex items-center gap-2"
          >
            <HelpCircle className="h-4 w-4" />
            Support
          </Button>
        </nav>
      </div>
    </header>
  );
};