import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ExternalLink, Search, Trophy, MapPin } from 'lucide-react';
import { mockUniversities } from '@/data/mockData';

export const UniversityRankings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [countryFilter, setCountryFilter] = useState('All');

  const countries = useMemo(() => {
    const uniqueCountries = [...new Set(mockUniversities.map(uni => uni.country))];
    return uniqueCountries.sort();
  }, []);

  const filteredUniversities = useMemo(() => {
    return mockUniversities.filter(university => {
      const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          university.country.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCountry = countryFilter === 'All' || university.country === countryFilter;
      
      return matchesSearch && matchesCountry;
    });
  }, [searchTerm, countryFilter]);

  const getRankBadgeColor = (rank: number) => {
    if (rank <= 3) return 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white';
    if (rank <= 10) return 'bg-gradient-to-r from-tech-primary to-tech-primary-light text-white';
    return 'bg-muted';
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Computer Science University Rankings
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Top-ranked universities for Computer Science education worldwide, based on CSRankings data
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
                placeholder="Search universities or countries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={countryFilter} onValueChange={setCountryFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Countries</SelectItem>
                {countries.map(country => (
                  <SelectItem key={country} value={country}>{country}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Rankings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUniversities.map((university) => (
          <Card key={university.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={getRankBadgeColor(university.rank)}>
                      <Trophy className="h-3 w-3 mr-1" />
                      #{university.rank}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold leading-tight">
                    {university.name}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{university.country}</span>
              </div>

              {university.score && (
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Overall Score</span>
                    <span className="text-sm font-bold">{university.score}/100</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-tech-primary to-tech-accent h-2 rounded-full transition-all duration-300"
                      style={{ width: `${university.score}%` }}
                    />
                  </div>
                </div>
              )}

              {university.website && (
                <Button asChild variant="outline" className="w-full">
                  <a href={university.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    Visit Website
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUniversities.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No universities found matching your search.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Data source: <strong>CSRankings</strong> • Showing {filteredUniversities.length} of {mockUniversities.length} universities
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};