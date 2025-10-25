import { NextResponse } from 'next/server';
import { mockCompanies } from '@/data/mockData';

export async function GET() {
  try {
    return NextResponse.json({ companies: mockCompanies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    return NextResponse.json({ companies: [] }, { status: 500 });
  }
}
