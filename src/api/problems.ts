export interface DSAProblem {
  id: string;
  name: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  description: string;
  topics: string[];
  companyTags: string[];
  leetcodeUrl?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  featured: boolean;
}

export const fetchProblems = async (): Promise<DSAProblem[]> => {
  try {
    const response = await fetch('/api/problems');
    if (response.ok) {
      const data = await response.json();
      return data.problems || [];
    }
    
    const { mockProblems } = await import('../data/mockData');
    return mockProblems.map(problem => ({
      id: problem.id.toString(),
      name: problem.name,
      difficulty: problem.difficulty.toUpperCase() as 'EASY' | 'MEDIUM' | 'HARD',
      description: `Practice ${problem.name} - ${problem.difficulty} difficulty problem`,
      topics: problem.topics,
      companyTags: problem.companies,
      leetcodeUrl: problem.url,
      status: 'ACTIVE' as const,
      featured: problem.companies.includes('Google') || problem.companies.includes('Meta')
    }));
  } catch (error) {
    console.error('Error fetching problems:', error);
    return [];
  }
};
