import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Search, Trophy, MapPin, Building2 } from 'lucide-react';
import { mockCompanies } from '@/data/mockData';

export const CompanyRankings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All');

  const industries = useMemo(() => {
    const uniqueIndustries = [...new Set(mockCompanies.map(company => company.industry))];
    return uniqueIndustries.sort();
  }, []);

  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter(company => {
      const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          company.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = industryFilter === 'All' || company.industry === industryFilter;
      
      return matchesSearch && matchesIndustry;
    });
  }, [searchTerm, industryFilter]);

  const getRankBadgeColor = (rank: number) => {
    if (rank <= 3) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (rank <= 10) return 'bg-gradient-to-r from-tech-primary to-tech-primary-light text-white';
    return 'bg-muted';
  };

  const getPrestigeColor = (score: number) => {
    if (score >= 95) return 'text-yellow-600 font-bold';
    if (score >= 90) return 'text-tech-primary font-semibold';
    return 'text-muted-foreground';
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Company Prestige Rankings
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Top tech companies ranked by prestige and desirability
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search companies or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={industryFilter} onValueChange={setIndustryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Industries</SelectItem>
                {industries.map(industry => (
                  <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Company Rankings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <Card key={company.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getRankBadgeColor(company.rank)}>
                      <Trophy className="h-3 w-3 mr-1" />
                      #{company.rank}
                    </Badge>
                    <span className={`text-lg font-bold ${getPrestigeColor(company.prestigeScore)}`}>
                      {company.prestigeScore}/100
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold">
                    {company.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">{company.industry}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{company.location}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Prestige Score</span>
                  <span className="text-sm font-bold">{company.prestigeScore}/100</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-tech-primary to-tech-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${company.prestigeScore}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2">
                {company.website && (
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={company.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No companies found matching your search.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Data source: <strong>Prestige Hunt</strong> • Showing {filteredCompanies.length} of {mockCompanies.length} companies
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};