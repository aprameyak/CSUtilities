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
  Calendar,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Filter,
  Trophy,
  Users
} from 'lucide-react';

// Mock data for hackathons
const mockHackathons = [
  {
    id: '1',
    name: 'Google Developer Hackathon 2024',
    organizer: 'Google',
    location: 'Mountain View, CA',
    type: 'HYBRID',
    startDate: '2024-03-15',
    endDate: '2024-03-17',
    registrationDeadline: '2024-03-10',
    prizePool: '50,000',
    prizeCurrency: 'USD',
    description: 'Build innovative solutions using Google technologies and compete for amazing prizes.',
    themes: ['AI/ML', 'Web Development', 'Mobile Apps'],
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    requirements: ['Open to all developers', 'Team size: 2-4 people'],
    websiteUrl: 'https://developers.google.com/hackathon',
    registrationUrl: 'https://developers.google.com/hackathon/register',
    dataSource: 'MANUAL',
    postedDate: '2024-01-15',
    logoUrl: 'https://developers.google.com/static/images/brand-guidelines/google-developers-logo.png',
    difficulty: 'HARD',
    popularity: 95
  },
  {
    id: '2',
    name: 'Meta University Hackathon',
    organizer: 'Meta',
    location: 'Remote',
    type: 'ONLINE',
    startDate: '2024-04-01',
    endDate: '2024-04-03',
    registrationDeadline: '2024-03-25',
    prizePool: '25,000',
    prizeCurrency: 'USD',
    description: 'Create the next big thing in social media and VR technology.',
    themes: ['Social Media', 'VR/AR', 'AI'],
    technologies: ['React', 'Oculus SDK', 'PyTorch'],
    requirements: ['University students only', 'Individual or team participation'],
    websiteUrl: 'https://meta.com/hackathon',
    registrationUrl: 'https://meta.com/hackathon/register',
    dataSource: 'MANUAL',
    postedDate: '2024-01-20',
    logoUrl: 'https://meta.com/static/images/logo.png',
    difficulty: 'MEDIUM',
    popularity: 88
  },
  {
    id: '3',
    name: 'Microsoft Student Hackathon',
    organizer: 'Microsoft',
    location: 'Seattle, WA',
    type: 'IN_PERSON',
    startDate: '2024-05-10',
    endDate: '2024-05-12',
    registrationDeadline: '2024-04-30',
    prizePool: '30,000',
    prizeCurrency: 'USD',
    description: 'Build solutions using Microsoft Azure and compete with students worldwide.',
    themes: ['Cloud Computing', 'IoT', 'Data Science'],
    technologies: ['Azure', 'C#', 'Power BI'],
    requirements: ['Student ID required', 'Team size: 3-5 people'],
    websiteUrl: 'https://microsoft.com/student-hackathon',
    registrationUrl: 'https://microsoft.com/student-hackathon/register',
    dataSource: 'MANUAL',
    postedDate: '2024-01-25',
    logoUrl: 'https://microsoft.com/static/images/logo.png',
    difficulty: 'HARD',
    popularity: 92
  }
];

export const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const filteredHackathons = useMemo(() => {
    return mockHackathons.filter(hackathon => {
      const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.themes.some(theme => theme.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          hackathon.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = typeFilter === 'All' || hackathon.type === typeFilter;
      const matchesLocation = locationFilter === 'All' || hackathon.location === locationFilter;
      const matchesDifficulty = difficultyFilter === 'All' || hackathon.difficulty === difficultyFilter;
      
      return matchesSearch && matchesType && matchesLocation && matchesDifficulty;
    });
  }, [searchTerm, typeFilter, locationFilter, difficultyFilter]);

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

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'ONLINE': return 'Online';
      case 'IN_PERSON': return 'In-Person';
      case 'HYBRID': return 'Hybrid';
      case 'UNIVERSITY': return 'University';
      case 'CORPORATE': return 'Corporate';
      case 'INDEPENDENT': return 'Independent';
      default: return type;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getDaysUntilStart = (startDate: string) => {
    const today = new Date();
    const startDateObj = new Date(startDate);
    const diffTime = startDateObj.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Tech Hackathons
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and participate in exciting hackathons from top tech companies
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search hackathons..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Hackathon type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                <SelectItem value="ONLINE">Online</SelectItem>
                <SelectItem value="IN_PERSON">In-Person</SelectItem>
                <SelectItem value="HYBRID">Hybrid</SelectItem>
                <SelectItem value="UNIVERSITY">University</SelectItem>
                <SelectItem value="CORPORATE">Corporate</SelectItem>
                <SelectItem value="INDEPENDENT">Independent</SelectItem>
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
                <SelectItem value="Seattle, WA">Seattle, WA</SelectItem>
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
          </div>
        </CardContent>
      </Card>

      {/* Hackathons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHackathons.map((hackathon) => {
          const daysUntilDeadline = getDaysUntilDeadline(hackathon.registrationDeadline);
          const daysUntilStart = getDaysUntilStart(hackathon.startDate);
          const isUrgent = daysUntilDeadline <= 7;
          const isStartingSoon = daysUntilStart <= 14;
          
          return (
            <Card key={hackathon.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDifficultyColor(hackathon.difficulty)}>
                        {hackathon.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {getTypeLabel(hackathon.type)}
                      </Badge>
                      {hackathon.type === 'ONLINE' && (
                        <Badge variant="secondary">Remote</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">
                      {hackathon.name}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span className="font-medium">{hackathon.organizer}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${getPopularityColor(hackathon.popularity)}`} />
                    <span className={`text-sm font-medium ${getPopularityColor(hackathon.popularity)}`}>
                      {hackathon.popularity}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{hackathon.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">
                      {new Date(hackathon.startDate).toLocaleDateString()} - {new Date(hackathon.endDate).toLocaleDateString()}
                    </span>
                  </div>
                  {hackathon.prizePool && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">
                        {hackathon.prizeCurrency}{hackathon.prizePool} Prize Pool
                      </span>
                    </div>
                  )}
                </div>

                {/* Themes */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Themes</h4>
                  <div className="flex flex-wrap gap-1">
                    {hackathon.themes.slice(0, 3).map((theme, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {theme}
                      </Badge>
                    ))}
                    {hackathon.themes.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{hackathon.themes.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {hackathon.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {hackathon.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{hackathon.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Registration Deadline */}
                {hackathon.registrationDeadline && (
                  <div className={`p-3 rounded-lg ${isUrgent ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-4 w-4 ${isUrgent ? 'text-red-600' : 'text-blue-600'}`} />
                      <div>
                        <p className={`text-sm font-medium ${isUrgent ? 'text-red-800' : 'text-blue-800'}`}>
                          Registration Deadline
                        </p>
                        <p className={`text-xs ${isUrgent ? 'text-red-600' : 'text-blue-600'}`}>
                          {new Date(hackathon.registrationDeadline).toLocaleDateString()} 
                          {isUrgent && ` (${daysUntilDeadline} days left!)`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Start Date Alert */}
                {isStartingSoon && (
                  <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-green-600" />
                      <div>
                        <p className="text-sm font-medium text-green-800">
                          Starting Soon!
                        </p>
                        <p className="text-xs text-green-600">
                          {daysUntilStart} days until hackathon starts
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={hackathon.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Learn More
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                  {hackathon.registrationUrl && (
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a href={hackathon.registrationUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        Register
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {filteredHackathons.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No hackathons found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredHackathons.length} of {mockHackathons.length} hackathons
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
