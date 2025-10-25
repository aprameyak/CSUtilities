import { NextResponse } from 'next/server';
import { mockInternships } from '@/data/mockData';

export async function GET() {
  try {
    return NextResponse.json({ internships: mockInternships });
  } catch (error) {
    console.error('Error fetching internships:', error);
    return NextResponse.json({ internships: [] }, { status: 500 });
  }
}
