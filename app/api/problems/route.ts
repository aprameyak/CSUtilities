import { NextResponse } from 'next/server';
import { mockProblems } from '@/data/mockData';

export async function GET() {
  try {
    const problems = mockProblems.map(problem => ({
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

    return NextResponse.json({ problems });
  } catch (error) {
    console.error('Error fetching problems:', error);
    return NextResponse.json({ problems: [] }, { status: 500 });
  }
}
