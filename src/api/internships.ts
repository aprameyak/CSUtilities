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
  dataSource: string;
  sourceUrl: string;
  postedDate: string;
  companyLogo?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  popularity: number;
  companyIndustry: string;
}

export const fetchInternships = async (): Promise<Internship[]> => {
  try {
    const response = await fetch('/api/internships');
    if (response.ok) {
      const data = await response.json();
      return data.internships || [];
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching internships:', error);
    return [];
  }
};
