export interface Company {
  id: string;
  name: string;
  prestigeScore: number;
  rank?: number;
  industry: string;
  location?: string;
  websiteUrl?: string;
  description?: string;
  logoUrl?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  featured: boolean;
}

export const fetchCompanies = async (): Promise<Company[]> => {
  try {
    const response = await fetch('/api/companies');
    if (response.ok) {
      const data = await response.json();
      return data.companies || [];
    }
    
    const { mockCompanies } = await import('../data/mockData');
    return mockCompanies.map(company => ({
      id: company.id.toString(),
      name: company.name,
      prestigeScore: company.prestigeScore,
      rank: company.rank,
      industry: company.industry,
      location: company.location,
      websiteUrl: company.website,
      description: `Leading technology company: ${company.name}`,
      status: 'ACTIVE' as const,
      featured: company.rank <= 10
    }));
  } catch (error) {
    console.error('Error fetching companies:', error);
    return [];
  }
};
