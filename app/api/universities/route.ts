import { NextResponse } from 'next/server';
import { mockUniversities } from '@/data/mockData';

export async function GET() {
  try {
    return NextResponse.json({ universities: mockUniversities });
  } catch (error) {
    console.error('Error fetching universities:', error);
    return NextResponse.json({ universities: [] }, { status: 500 });
  }
}
