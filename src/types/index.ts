export interface LeetCodeProblem {
  id: number;
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  companies: string[];
  url: string;
  topics: string[];
}

export interface University {
  id: number;
  name: string;
  rank: number;
  country: string;
  score?: number;
  website?: string;
}

export interface Company {
  id: number;
  name: string;
  prestigeScore: number;
  rank: number;
  industry: string;
  location: string;
  website?: string;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'SUMMER' | 'FALL' | 'SPRING' | 'YEAR_ROUND' | 'CO_OP';
  duration?: string;
  salaryMin?: number;
  salaryMax?: number;
  salaryCurrency: string;
  requirements: string[];
  skills: string[];
  description: string;
  applicationDeadline?: string;
  startDate?: string;
  endDate?: string;
  remote: boolean;
  dataSource: 'GITHUB_VANSH' | 'GITHUB_SIMPLIFY' | 'INTERN_LIST' | 'LINKEDIN' | 'GLASSDOOR' | 'INDEED' | 'HANDLE' | 'MANUAL';
  sourceUrl: string;
  postedDate: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  popularity: number;
}

export type DifficultyFilter = 'All' | 'Easy' | 'Medium' | 'Hard';
export type CompanyFilter = 'All' | string;
export type InternshipTypeFilter = 'All' | 'SUMMER' | 'FALL' | 'SPRING' | 'YEAR_ROUND' | 'CO_OP';
export type InternshipDifficultyFilter = 'All' | 'EASY' | 'MEDIUM' | 'HARD';
export type RemoteFilter = 'All' | 'Remote' | 'On-site';