export interface University {
  id: string;
  name: string;
  rank?: number;
  country: string;
  prestigeScore: number;
  websiteUrl?: string;
  location?: string;
  description?: string;
  logoUrl?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DRAFT';
  featured: boolean;
}

export const fetchUniversities = async (): Promise<University[]> => {
  try {
    const response = await fetch('/api/universities');
    if (response.ok) {
      const data = await response.json();
      return data.universities || [];
    }
    
    const { mockUniversities } = await import('../data/mockData');
    return mockUniversities.map(uni => ({
      id: uni.id.toString(),
      name: uni.name,
      rank: uni.rank,
      country: uni.country,
      prestigeScore: Math.round(uni.score),
      websiteUrl: uni.website,
      location: uni.country,
      description: `Top-ranked computer science program at ${uni.name}`,
      status: 'ACTIVE' as const,
      featured: uni.rank <= 10
    }));
  } catch (error) {
    console.error('Error fetching universities:', error);
    return [];
  }
};
