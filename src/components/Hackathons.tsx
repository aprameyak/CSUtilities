"use client";

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
  TrendingUp,
  Filter,
  Trophy,
  Users
} from 'lucide-react';

const mockHackathons = [
  {
    id: '1',
    name: 'Google Developer Hackathon 2026',
    organizer: 'Google',
    location: 'Mountain View, CA',
    type: 'HYBRID',
    startDate: '2026-06-13',
    endDate: '2026-06-15',
    registrationDeadline: '2026-06-08',
    prizePool: '50,000',
    prizeCurrency: 'USD',
    description: 'Build innovative solutions using Google technologies and compete for amazing prizes.',
    themes: ['AI/ML', 'Web Development', 'Mobile Apps'],
    technologies: ['Flutter', 'Firebase', 'TensorFlow'],
    requirements: ['Open to all developers', 'Team size: 2-4 people'],
    websiteUrl: 'https://developers.google.com',
    registrationUrl: 'https://developers.google.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-15',
    difficulty: 'HARD',
    popularity: 95
  },
  {
    id: '2',
    name: 'Meta University Hackathon 2026',
    organizer: 'Meta',
    location: 'Remote',
    type: 'ONLINE',
    startDate: '2026-07-11',
    endDate: '2026-07-13',
    registrationDeadline: '2026-07-05',
    prizePool: '25,000',
    prizeCurrency: 'USD',
    description: 'Create the next big thing in social media and VR technology.',
    themes: ['Social Media', 'VR/AR', 'AI'],
    technologies: ['React', 'Oculus SDK', 'PyTorch'],
    requirements: ['University students only', 'Individual or team participation'],
    websiteUrl: 'https://meta.com',
    registrationUrl: 'https://meta.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-20',
    difficulty: 'MEDIUM',
    popularity: 88
  },
  {
    id: '3',
    name: 'Microsoft Student Hackathon',
    organizer: 'Microsoft',
    location: 'Seattle, WA',
    type: 'IN_PERSON',
    startDate: '2026-08-07',
    endDate: '2026-08-09',
    registrationDeadline: '2026-07-28',
    prizePool: '30,000',
    prizeCurrency: 'USD',
    description: 'Build solutions using Microsoft Azure and compete with students worldwide.',
    themes: ['Cloud Computing', 'IoT', 'Data Science'],
    technologies: ['Azure', 'C#', 'Power BI'],
    requirements: ['Student ID required', 'Team size: 3-5 people'],
    websiteUrl: 'https://microsoft.com',
    registrationUrl: 'https://microsoft.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-25',
    difficulty: 'HARD',
    popularity: 92
  },
  {
    id: '4',
    name: 'HackMIT 2026',
    organizer: 'MIT',
    location: 'Cambridge, MA',
    type: 'IN_PERSON',
    startDate: '2026-09-19',
    endDate: '2026-09-20',
    registrationDeadline: '2026-08-15',
    prizePool: '20,000',
    prizeCurrency: 'USD',
    description: 'One of the most prestigious university hackathons in the world, hosted by MIT.',
    themes: ['Open Innovation', 'Social Impact', 'Hardware'],
    technologies: ['Any', 'Raspberry Pi', 'Arduino'],
    requirements: ['College students only', 'Individual or team up to 4'],
    websiteUrl: 'https://hackmit.org',
    registrationUrl: 'https://hackmit.org',
    dataSource: 'MANUAL',
    postedDate: '2026-04-28',
    difficulty: 'HARD',
    popularity: 96
  },
  {
    id: '5',
    name: 'TreeHacks 2026',
    organizer: 'Stanford University',
    location: 'Stanford, CA',
    type: 'IN_PERSON',
    startDate: '2026-05-15',
    endDate: '2026-05-17',
    registrationDeadline: '2026-05-08',
    prizePool: '15,000',
    prizeCurrency: 'USD',
    description: 'Stanford\'s flagship hackathon focused on high-impact hacks for social good.',
    themes: ['Healthcare', 'Climate', 'Education', 'Social Impact'],
    technologies: ['Any', 'Python', 'JavaScript'],
    requirements: ['Open to all students', 'Teams of 1-4'],
    websiteUrl: 'https://treehacks.com',
    registrationUrl: 'https://treehacks.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-15',
    difficulty: 'MEDIUM',
    popularity: 90
  },
  {
    id: '6',
    name: 'Hack the North 2026',
    organizer: 'University of Waterloo',
    location: 'Waterloo, ON, Canada',
    type: 'IN_PERSON',
    startDate: '2026-09-11',
    endDate: '2026-09-13',
    registrationDeadline: '2026-08-01',
    prizePool: '35,000',
    prizeCurrency: 'CAD',
    description: 'Canada\'s biggest hackathon, welcoming 1,000+ hackers from around the world.',
    themes: ['Open Theme', 'Fintech', 'AI/ML', 'Accessibility'],
    technologies: ['Any'],
    requirements: ['Open to post-secondary students', 'Teams up to 4'],
    websiteUrl: 'https://hackthenorth.com',
    registrationUrl: 'https://hackthenorth.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-28',
    difficulty: 'MEDIUM',
    popularity: 93
  },
  {
    id: '7',
    name: 'AWS Build On',
    organizer: 'Amazon Web Services',
    location: 'Remote',
    type: 'ONLINE',
    startDate: '2026-06-27',
    endDate: '2026-06-29',
    registrationDeadline: '2026-06-20',
    prizePool: '40,000',
    prizeCurrency: 'USD',
    description: 'Build cloud-native applications on AWS and win credits, cash prizes, and swag.',
    themes: ['Cloud Infrastructure', 'Serverless', 'AI/ML', 'IoT'],
    technologies: ['AWS Lambda', 'DynamoDB', 'SageMaker', 'CDK'],
    requirements: ['Open to all developers', 'Individual or team up to 5'],
    websiteUrl: 'https://aws.amazon.com',
    registrationUrl: 'https://aws.amazon.com',
    dataSource: 'MANUAL',
    postedDate: '2026-04-22',
    difficulty: 'MEDIUM',
    popularity: 82
  },
  {
    id: '8',
    name: 'MHacks 2026',
    organizer: 'University of Michigan',
    location: 'Ann Arbor, MI',
    type: 'IN_PERSON',
    startDate: '2026-10-02',
    endDate: '2026-10-04',
    registrationDeadline: '2026-08-31',
    prizePool: '12,000',
    prizeCurrency: 'USD',
    description: 'University of Michigan\'s premier hackathon bringing together students from across the country.',
    themes: ['Sustainability', 'Healthcare', 'Productivity', 'Open Innovation'],
    technologies: ['Any'],
    requirements: ['College students', 'Teams of 1-4'],
    websiteUrl: 'https://mhacks.org',
    registrationUrl: 'https://mhacks.org',
    dataSource: 'MANUAL',
    postedDate: '2026-04-26',
    difficulty: 'EASY',
    popularity: 76
  }
];

export const Hackathons = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  const filteredHackathons = useMemo(() => {
    return mockHackathons.filter(hackathon => {
      const matchesSearch = hackathon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.organizer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          hackathon.themes.some(theme => theme.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          hackathon.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesType = typeFilter === 'All' || hackathon.type === typeFilter;
      const matchesDifficulty = difficultyFilter === 'All' || hackathon.difficulty === difficultyFilter;

      return matchesSearch && matchesType && matchesDifficulty;
    });
  }, [searchTerm, typeFilter, difficultyFilter]);

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
          Discover and participate in exciting hackathons from top tech companies and universities
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search hackathons, themes, or technologies..."
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
          const isStartingSoon = daysUntilStart <= 14 && daysUntilStart >= 0;

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
                        {hackathon.prizeCurrency} {hackathon.prizePool} Prize Pool
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
