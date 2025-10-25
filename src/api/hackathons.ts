export interface Hackathon {
  id: string;
  name: string;
  organizer: string;
  location: string;
  type: 'ONLINE' | 'IN_PERSON' | 'HYBRID' | 'UNIVERSITY' | 'CORPORATE' | 'INDEPENDENT';
  startDate: string;
  endDate: string;
  registrationDeadline?: string;
  prizePool?: string;
  prizeCurrency: string;
  description: string;
  themes: string[];
  technologies: string[];
  requirements: string[];
  websiteUrl: string;
  registrationUrl?: string;
  dataSource: string;
  postedDate: string;
  logoUrl?: string;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  popularity: number;
}

export const fetchHackathons = async (): Promise<Hackathon[]> => {
  try {
    const response = await fetch('/api/hackathons');
    if (response.ok) {
      const data = await response.json();
      return data.hackathons || [];
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return [];
  }
};
