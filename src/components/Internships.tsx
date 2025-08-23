import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  ExternalLink, 
  Search, 
  MapPin, 
  Building2, 
  Calendar,
  DollarSign,
  Users,
  Clock,
  Star,
  TrendingUp,
  Filter
} from 'lucide-react';

// Mock data - replace with API call
const mockInternships = [
  {
    id: '1',
    title: 'Software Engineering Intern',
    company: 'Google',
    location: 'Mountain View, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 8000,
    salaryMax: 12000,
    salaryCurrency: 'USD',
    requirements: ['Currently pursuing BS/MS in Computer Science', 'Strong programming skills'],
    skills: ['Python', 'Java', 'JavaScript', 'Data Structures'],
    description: 'Join Google\'s engineering team for an exciting summer internship opportunity.',
    applicationDeadline: '2024-02-15',
    startDate: '2024-06-01',
    endDate: '2024-08-23',
    remote: false,
    dataSource: 'GITHUB_VANSH',
    sourceUrl: 'https://careers.google.com/jobs/results/123456',
    postedDate: '2024-01-15',
    difficulty: 'HARD',
    popularity: 95
  },
  {
    id: '2',
    title: 'Frontend Developer Intern',
    company: 'Meta',
    location: 'Remote',
    type: 'SUMMER',
    duration: '10 weeks',
    salaryMin: 7000,
    salaryMax: 10000,
    salaryCurrency: 'USD',
    requirements: ['React experience', 'JavaScript proficiency'],
    skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
    description: 'Build amazing user experiences with Meta\'s frontend team.',
    applicationDeadline: '2024-02-01',
    startDate: '2024-06-01',
    endDate: '2024-08-09',
    remote: true,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://careers.meta.com/jobs/123456',
    postedDate: '2024-01-10',
    difficulty: 'MEDIUM',
    popularity: 88
  },
  {
    id: '3',
    title: 'Data Science Intern',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 9000,
    salaryMax: 13000,
    salaryCurrency: 'USD',
    requirements: ['Machine Learning coursework', 'Python experience'],
    skills: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
    description: 'Work on cutting-edge data science projects at Netflix.',
    applicationDeadline: '2024-01-31',
    startDate: '2024-06-01',
    endDate: '2024-08-23',
    remote: false,
    dataSource: 'INTERN_LIST',
    sourceUrl: 'https://jobs.netflix.com/jobs/123456',
    postedDate: '2024-01-05',
    difficulty: 'HARD',
    popularity: 92
  }
];

export const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [remoteFilter, setRemoteFilter] = useState('All');

  const filteredInternships = useMemo(() => {
    return mockInternships.filter(internship => {
      const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          internship.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          internship.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = typeFilter === 'All' || internship.type === typeFilter;
      const matchesLocation = locationFilter === 'All' || internship.location === locationFilter;
      const matchesDifficulty = difficultyFilter === 'All' || internship.difficulty === difficultyFilter;
      const matchesRemote = remoteFilter === 'All' || 
                           (remoteFilter === 'Remote' && internship.remote) ||
                           (remoteFilter === 'On-site' && !internship.remote);
      
      return matchesSearch && matchesType && matchesLocation && matchesDifficulty && matchesRemote;
    });
  }, [searchTerm, typeFilter, locationFilter, difficultyFilter, remoteFilter]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'EASY':
        return 'bg-green-100 text-green-800';
      case 'MEDIUM':
        return 'bg-yellow-100 text-yellow-800';
      case 'HARD':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 90) return 'text-red-600';
    if (popularity >= 80) return 'text-orange-600';
    if (popularity >= 70) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const formatSalary = (min: number, max: number, currency: string) => {
    return `${currency}${min.toLocaleString()} - ${currency}${max.toLocaleString()}`;
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Tech Internships
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and apply to the best tech internships from top companies
        </p>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Search & Filter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search internships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Internship type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="SUMMER">Summer</SelectItem>
                <SelectItem value="FALL">Fall</SelectItem>
                <SelectItem value="SPRING">Spring</SelectItem>
                <SelectItem value="YEAR_ROUND">Year-round</SelectItem>
                <SelectItem value="CO_OP">Co-op</SelectItem>
              </SelectContent>
            </Select>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Locations</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="Mountain View, CA">Mountain View, CA</SelectItem>
                <SelectItem value="Los Gatos, CA">Los Gatos, CA</SelectItem>
              </SelectContent>
            </Select>

            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Difficulties</SelectItem>
                <SelectItem value="EASY">Easy</SelectItem>
                <SelectItem value="MEDIUM">Medium</SelectItem>
                <SelectItem value="HARD">Hard</SelectItem>
              </SelectContent>
            </Select>

            <Select value={remoteFilter} onValueChange={setRemoteFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Work type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Work Types</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
                <SelectItem value="On-site">On-site</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Internships Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredInternships.map((internship) => {
          const daysUntilDeadline = getDaysUntilDeadline(internship.applicationDeadline);
          const isUrgent = daysUntilDeadline <= 7;
          
          return (
            <Card key={internship.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDifficultyColor(internship.difficulty)}>
                        {internship.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {internship.type}
                      </Badge>
                      {internship.remote && (
                        <Badge variant="secondary">Remote</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">
                      {internship.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{internship.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${getPopularityColor(internship.popularity)}`} />
                    <span className={`text-sm font-medium ${getPopularityColor(internship.popularity)}`}>
                      {internship.popularity}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{internship.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                  {internship.salaryMin && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">
                        {formatSalary(internship.salaryMin, internship.salaryMax, internship.salaryCurrency)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {internship.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {internship.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{internship.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Application Deadline */}
                {internship.applicationDeadline && (
                  <div className={`p-3 rounded-lg ${isUrgent ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-4 w-4 ${isUrgent ? 'text-red-600' : 'text-blue-600'}`} />
                      <div>
                        <p className={`text-sm font-medium ${isUrgent ? 'text-red-800' : 'text-blue-800'}`}>
                          Application Deadline
                        </p>
                        <p className={`text-xs ${isUrgent ? 'text-red-600' : 'text-blue-600'}`}>
                          {new Date(internship.applicationDeadline).toLocaleDateString()} 
                          {isUrgent && ` (${daysUntilDeadline} days left!)`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={internship.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Apply Now
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm">
                    <Star className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredInternships.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No internships found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Data sources: <strong>GitHub Vansh</strong>, <strong>GitHub Simplify</strong>, <strong>Intern List</strong> • 
              Showing {filteredInternships.length} of {mockInternships.length} internships
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
