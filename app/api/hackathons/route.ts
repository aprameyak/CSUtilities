import { NextResponse } from 'next/server';
import { mockHackathons } from '@/data/mockData';

export async function GET() {
  try {
    return NextResponse.json({ hackathons: mockHackathons });
  } catch (error) {
    console.error('Error fetching hackathons:', error);
    return NextResponse.json({ hackathons: [] }, { status: 500 });
  }
}
