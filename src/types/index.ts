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

export type DifficultyFilter = 'All' | 'Easy' | 'Medium' | 'Hard';
export type CompanyFilter = 'All' | string;