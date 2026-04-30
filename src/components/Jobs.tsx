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
  Building2,
  Calendar,
  DollarSign,
  Clock,
  Star,
  TrendingUp,
  Filter,
  Briefcase,
  GraduationCap
} from 'lucide-react';

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
    applicationDeadline: '2026-05-15',
    startDate: '2026-06-01',
    endDate: '2026-08-22',
    remote: false,
    dataSource: 'GITHUB_VANSH',
    sourceUrl: 'https://careers.google.com',
    postedDate: '2026-04-01',
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
    applicationDeadline: '2026-05-20',
    startDate: '2026-06-15',
    endDate: '2026-08-24',
    remote: true,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://careers.meta.com',
    postedDate: '2026-04-05',
    difficulty: 'MEDIUM',
    popularity: 88
  },
  {
    id: '3',
    title: 'Machine Learning Intern',
    company: 'Apple',
    location: 'Cupertino, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 8500,
    salaryMax: 11000,
    salaryCurrency: 'USD',
    requirements: ['Experience with PyTorch or TensorFlow', 'Strong math background'],
    skills: ['Python', 'PyTorch', 'Machine Learning', 'Statistics'],
    description: 'Work on cutting-edge ML models that power Apple products.',
    applicationDeadline: '2026-05-10',
    startDate: '2026-06-01',
    endDate: '2026-08-22',
    remote: false,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://jobs.apple.com',
    postedDate: '2026-04-02',
    difficulty: 'HARD',
    popularity: 93
  },
  {
    id: '4',
    title: 'Cloud Infrastructure Intern',
    company: 'Amazon',
    location: 'Seattle, WA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 7500,
    salaryMax: 10500,
    salaryCurrency: 'USD',
    requirements: ['CS or related degree in progress', 'Linux experience a plus'],
    skills: ['AWS', 'Python', 'Linux', 'Networking'],
    description: 'Help build and scale the infrastructure that powers AWS.',
    applicationDeadline: '2026-05-25',
    startDate: '2026-06-08',
    endDate: '2026-08-28',
    remote: false,
    dataSource: 'LINKEDIN',
    sourceUrl: 'https://amazon.jobs',
    postedDate: '2026-04-08',
    difficulty: 'MEDIUM',
    popularity: 91
  },
  {
    id: '5',
    title: 'Data Engineering Intern',
    company: 'Stripe',
    location: 'San Francisco, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 8000,
    salaryMax: 11000,
    salaryCurrency: 'USD',
    requirements: ['Strong SQL knowledge', 'Experience with data pipelines'],
    skills: ['Python', 'SQL', 'Spark', 'dbt'],
    description: 'Build data pipelines and analytics infrastructure for Stripe\'s payments platform.',
    applicationDeadline: '2026-06-01',
    startDate: '2026-06-15',
    endDate: '2026-09-05',
    remote: false,
    dataSource: 'GLASSDOOR',
    sourceUrl: 'https://stripe.com/jobs',
    postedDate: '2026-04-12',
    difficulty: 'MEDIUM',
    popularity: 85
  },
  {
    id: '6',
    title: 'iOS Developer Intern',
    company: 'Airbnb',
    location: 'San Francisco, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 7000,
    salaryMax: 9500,
    salaryCurrency: 'USD',
    requirements: ['Swift experience required', 'Familiarity with UIKit or SwiftUI'],
    skills: ['Swift', 'SwiftUI', 'Xcode', 'iOS'],
    description: 'Join Airbnb\'s mobile team and help build experiences for millions of travelers.',
    applicationDeadline: '2026-06-10',
    startDate: '2026-06-22',
    endDate: '2026-09-12',
    remote: false,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://careers.airbnb.com',
    postedDate: '2026-04-15',
    difficulty: 'MEDIUM',
    popularity: 80
  },
  {
    id: '7',
    title: 'Security Engineering Intern',
    company: 'Cloudflare',
    location: 'Remote',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 7000,
    salaryMax: 10000,
    salaryCurrency: 'USD',
    requirements: ['Interest in security or networking', 'Systems programming experience'],
    skills: ['Go', 'Rust', 'Networking', 'Security'],
    description: 'Help protect the internet at massive scale with Cloudflare\'s security team.',
    applicationDeadline: '2026-06-15',
    startDate: '2026-07-07',
    endDate: '2026-09-26',
    remote: true,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://cloudflare.com/careers',
    postedDate: '2026-04-18',
    difficulty: 'HARD',
    popularity: 83
  },
  {
    id: '8',
    title: 'Product Engineering Intern',
    company: 'Figma',
    location: 'San Francisco, CA',
    type: 'SUMMER',
    duration: '12 weeks',
    salaryMin: 7500,
    salaryMax: 9500,
    salaryCurrency: 'USD',
    requirements: ['Frontend development skills', 'Design sensibility a plus'],
    skills: ['TypeScript', 'React', 'WebGL', 'CSS'],
    description: 'Build features that help millions of designers collaborate in real-time.',
    applicationDeadline: '2026-06-20',
    startDate: '2026-07-06',
    endDate: '2026-09-26',
    remote: false,
    dataSource: 'LINKEDIN',
    sourceUrl: 'https://figma.com/jobs',
    postedDate: '2026-04-20',
    difficulty: 'MEDIUM',
    popularity: 84
  }
];

const mockNewGradJobs = [
  {
    id: '1',
    title: 'Software Engineer - New Grad',
    company: 'Microsoft',
    location: 'Seattle, WA',
    type: 'FULL_TIME',
    salaryMin: 120000,
    salaryMax: 150000,
    salaryCurrency: 'USD',
    requirements: ['BS/MS in Computer Science or related field', 'Strong programming fundamentals'],
    skills: ['C#', '.NET', 'Azure', 'SQL'],
    description: 'Join Microsoft as a new grad software engineer and build amazing products.',
    applicationDeadline: '2026-07-15',
    startDate: '2026-09-01',
    remote: false,
    dataSource: 'LINKEDIN',
    sourceUrl: 'https://careers.microsoft.com',
    postedDate: '2026-04-20',
    difficulty: 'HARD',
    popularity: 92
  },
  {
    id: '2',
    title: 'Frontend Engineer - Entry Level',
    company: 'Netflix',
    location: 'Los Gatos, CA',
    type: 'FULL_TIME',
    salaryMin: 130000,
    salaryMax: 160000,
    salaryCurrency: 'USD',
    requirements: ['BS in Computer Science', 'Frontend development experience'],
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
    description: 'Build the next generation of Netflix\'s streaming platform.',
    applicationDeadline: '2026-07-01',
    startDate: '2026-08-18',
    remote: false,
    dataSource: 'GLASSDOOR',
    sourceUrl: 'https://jobs.netflix.com',
    postedDate: '2026-04-18',
    difficulty: 'MEDIUM',
    popularity: 89
  },
  {
    id: '3',
    title: 'Software Engineer I',
    company: 'Salesforce',
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salaryMin: 115000,
    salaryMax: 140000,
    salaryCurrency: 'USD',
    requirements: ['CS degree required', 'Java or Python experience'],
    skills: ['Java', 'Python', 'Salesforce Platform', 'SQL'],
    description: 'Join Salesforce\'s engineering team and help build the world\'s #1 CRM platform.',
    applicationDeadline: '2026-07-20',
    startDate: '2026-09-08',
    remote: false,
    dataSource: 'LINKEDIN',
    sourceUrl: 'https://salesforce.com/careers',
    postedDate: '2026-04-22',
    difficulty: 'MEDIUM',
    popularity: 80
  },
  {
    id: '4',
    title: 'Backend Engineer - New Grad',
    company: 'Stripe',
    location: 'Remote',
    type: 'FULL_TIME',
    salaryMin: 140000,
    salaryMax: 175000,
    salaryCurrency: 'USD',
    requirements: ['Strong distributed systems knowledge', 'CS or related degree'],
    skills: ['Ruby', 'Go', 'Java', 'PostgreSQL'],
    description: 'Help build reliable, high-scale financial infrastructure used by millions of businesses.',
    applicationDeadline: '2026-07-10',
    startDate: '2026-08-31',
    remote: true,
    dataSource: 'GLASSDOOR',
    sourceUrl: 'https://stripe.com/jobs',
    postedDate: '2026-04-25',
    difficulty: 'HARD',
    popularity: 94
  },
  {
    id: '5',
    title: 'Software Development Engineer',
    company: 'Amazon',
    location: 'Seattle, WA',
    type: 'FULL_TIME',
    salaryMin: 125000,
    salaryMax: 155000,
    salaryCurrency: 'USD',
    requirements: ['BS/MS in CS or related field', 'Data structures & algorithms proficiency'],
    skills: ['Java', 'Python', 'AWS', 'System Design'],
    description: 'Design, build, and maintain scalable systems that serve millions of Amazon customers.',
    applicationDeadline: '2026-07-25',
    startDate: '2026-09-14',
    remote: false,
    dataSource: 'LINKEDIN',
    sourceUrl: 'https://amazon.jobs',
    postedDate: '2026-04-28',
    difficulty: 'HARD',
    popularity: 91
  },
  {
    id: '6',
    title: 'Machine Learning Engineer - New Grad',
    company: 'OpenAI',
    location: 'San Francisco, CA',
    type: 'FULL_TIME',
    salaryMin: 160000,
    salaryMax: 210000,
    salaryCurrency: 'USD',
    requirements: ['Strong ML background', 'Research experience preferred'],
    skills: ['Python', 'PyTorch', 'CUDA', 'Distributed Training'],
    description: 'Work on frontier AI research and help build safe, beneficial AI systems.',
    applicationDeadline: '2026-06-30',
    startDate: '2026-08-17',
    remote: false,
    dataSource: 'GITHUB_SIMPLIFY',
    sourceUrl: 'https://openai.com/careers',
    postedDate: '2026-04-26',
    difficulty: 'HARD',
    popularity: 98
  }
];

export const Jobs = () => {
  const [jobType, setJobType] = useState<'internships' | 'new-grad'>('internships');
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [locationFilter, setLocationFilter] = useState('All');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [remoteFilter, setRemoteFilter] = useState('All');

  const currentData = jobType === 'internships' ? mockInternships : mockNewGradJobs;

  const filteredJobs = useMemo(() => {
    return currentData.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesType = typeFilter === 'All' || job.type === typeFilter;
      const matchesLocation = locationFilter === 'All' || job.location === locationFilter;
      const matchesDifficulty = difficultyFilter === 'All' || job.difficulty === difficultyFilter;
      const matchesRemote = remoteFilter === 'All' ||
                           (remoteFilter === 'Remote' && job.remote) ||
                           (remoteFilter === 'On-site' && !job.remote);

      return matchesSearch && matchesType && matchesLocation && matchesDifficulty && matchesRemote;
    });
  }, [currentData, searchTerm, typeFilter, locationFilter, difficultyFilter, remoteFilter]);

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

  const getJobTypeLabel = (type: string) => {
    if (jobType === 'internships') {
      switch (type) {
        case 'SUMMER': return 'Summer';
        case 'FALL': return 'Fall';
        case 'SPRING': return 'Spring';
        case 'YEAR_ROUND': return 'Year-round';
        case 'CO_OP': return 'Co-op';
        default: return type;
      }
    } else {
      switch (type) {
        case 'FULL_TIME': return 'Full-time';
        case 'PART_TIME': return 'Part-time';
        case 'CONTRACT': return 'Contract';
        case 'FREELANCE': return 'Freelance';
        default: return type;
      }
    }
  };

  const uniqueLocations = useMemo(() => {
    const locs = new Set(currentData.map(j => j.location));
    return Array.from(locs).sort();
  }, [currentData]);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-tech-primary to-tech-accent bg-clip-text text-transparent">
          Tech Jobs
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover and apply to the best tech opportunities
        </p>
      </div>

      {/* Job Type Toggle */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-center">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <Button
                variant={jobType === 'internships' ? 'default' : 'ghost'}
                onClick={() => { setJobType('internships'); setTypeFilter('All'); setLocationFilter('All'); }}
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Internships
              </Button>
              <Button
                variant={jobType === 'new-grad' ? 'default' : 'ghost'}
                onClick={() => { setJobType('new-grad'); setTypeFilter('All'); setLocationFilter('All'); }}
                className="flex items-center gap-2"
              >
                <GraduationCap className="h-4 w-4" />
                New Grad Jobs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

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
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Job type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Types</SelectItem>
                {jobType === 'internships' ? (
                  <>
                    <SelectItem value="SUMMER">Summer</SelectItem>
                    <SelectItem value="FALL">Fall</SelectItem>
                    <SelectItem value="SPRING">Spring</SelectItem>
                    <SelectItem value="YEAR_ROUND">Year-round</SelectItem>
                    <SelectItem value="CO_OP">Co-op</SelectItem>
                  </>
                ) : (
                  <>
                    <SelectItem value="FULL_TIME">Full-time</SelectItem>
                    <SelectItem value="PART_TIME">Part-time</SelectItem>
                    <SelectItem value="CONTRACT">Contract</SelectItem>
                    <SelectItem value="FREELANCE">Freelance</SelectItem>
                  </>
                )}
              </SelectContent>
            </Select>

            <Select value={locationFilter} onValueChange={setLocationFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Locations</SelectItem>
                {uniqueLocations.map(loc => (
                  <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                ))}
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

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => {
          const daysUntilDeadline = getDaysUntilDeadline(job.applicationDeadline);
          const isUrgent = daysUntilDeadline <= 7;

          return (
            <Card key={job.id} className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getDifficultyColor(job.difficulty)}>
                        {job.difficulty}
                      </Badge>
                      <Badge variant="outline">
                        {getJobTypeLabel(job.type)}
                      </Badge>
                      {job.remote && (
                        <Badge variant="secondary">Remote</Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold mb-2">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className={`h-4 w-4 ${getPopularityColor(job.popularity)}`} />
                    <span className={`text-sm font-medium ${getPopularityColor(job.popularity)}`}>
                      {job.popularity}
                    </span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  {jobType === 'internships' && 'duration' in job && job.duration && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{job.duration as string}</span>
                    </div>
                  )}
                  {job.salaryMin && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span className="text-sm">
                        {formatSalary(job.salaryMin, job.salaryMax, job.salaryCurrency)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Skills */}
                <div>
                  <h4 className="text-sm font-medium mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {job.skills.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{job.skills.length - 4} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Application Deadline */}
                {job.applicationDeadline && (
                  <div className={`p-3 rounded-lg ${isUrgent ? 'bg-red-50 border border-red-200' : 'bg-blue-50 border border-blue-200'}`}>
                    <div className="flex items-center gap-2">
                      <Clock className={`h-4 w-4 ${isUrgent ? 'text-red-600' : 'text-blue-600'}`} />
                      <div>
                        <p className={`text-sm font-medium ${isUrgent ? 'text-red-800' : 'text-blue-800'}`}>
                          Application Deadline
                        </p>
                        <p className={`text-xs ${isUrgent ? 'text-red-600' : 'text-blue-600'}`}>
                          {new Date(job.applicationDeadline).toLocaleDateString()}
                          {isUrgent && ` (${daysUntilDeadline} days left!)`}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={job.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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

      {filteredJobs.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">No jobs found matching your search criteria.</p>
          </CardContent>
        </Card>
      )}

      <div className="text-center">
        <Card className="inline-block">
          <CardContent className="p-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredJobs.length} of {currentData.length} {jobType === 'internships' ? 'internships' : 'new grad jobs'}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
