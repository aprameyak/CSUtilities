import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { ExternalLink, Search, Filter } from 'lucide-react';
import { mockProblems, companyList } from '@/data/mockData';
import { LeetCodeProblem, DifficultyFilter, CompanyFilter } from '@/types';

export const DSAPractice = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>('All');
  const [companyFilter, setCompanyFilter] = useState<CompanyFilter>('All');

  const filteredProblems = useMemo(() => {
    return mockProblems.filter(problem => {
      const matchesSearch = problem.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          problem.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesDifficulty = difficultyFilter === 'All' || problem.difficulty === difficultyFilter;
      const matchesCompany = companyFilter === 'All' || problem.companies.includes(companyFilter);
      
      return matchesSearch && matchesDifficulty && matchesCompany;
    });
  }, [searchTerm, difficultyFilter, companyFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-easy text-white';
      case 'Medium': return 'bg-medium text-white';
      case 'Hard': return 'bg-hard text-white';
      default: return 'bg-muted';
    }
  };

  const getCompanyColor = (company: string) => {
    const colors: Record<string, string> = {
      'Google': 'bg-google text-white',
      'Amazon': 'bg-amazon text-white',
      'Meta': 'bg-meta text-white',
      'Apple': 'bg-apple text-white',
      'Microsoft': 'bg-microsoft text-white',
    };
    return colors[company] || 'bg-muted';
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          DSA Practice Hub
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Master Data Structures & Algorithms with curated LeetCode problems tagged by top tech companies
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters & Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search problems or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={difficultyFilter} onValueChange={(value: DifficultyFilter) => setDifficultyFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select value={companyFilter} onValueChange={(value: CompanyFilter) => setCompanyFilter(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Companies</SelectItem>
                {companyList.map(company => (
                  <SelectItem key={company} value={company}>{company}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Problems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProblems.map((problem) => (
          <Card key={problem.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg font-semibold">
                    #{problem.id}. {problem.name}
                  </CardTitle>
                </div>
                <Badge className={getDifficultyColor(problem.difficulty)}>
                  {problem.difficulty}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Topics</h4>
                <div className="flex flex-wrap gap-1">
                  {problem.topics.map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Companies</h4>
                <div className="flex flex-wrap gap-1">
                  {problem.companies.map((company) => (
                    <Badge key={company} className={`text-xs ${getCompanyColor(company)}`}>
                      {company}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button asChild className="w-full">
                <a href={problem.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Solve on LeetCode
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProblems.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No problems found matching your filters.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center text-sm text-muted-foreground">
        Showing {filteredProblems.length} of {mockProblems.length} problems
      </div>
    </div>
  );
};