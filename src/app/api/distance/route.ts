import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origins');
  const destination = searchParams.get('destinations');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!origin || !destination) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }
  if (!apiKey || apiKey.includes('test_key')) {
    // Fallback logic if API key is not configured, to avoid breaking the UI
    return NextResponse.json({ rows: [{ elements: [{ duration: { text: '~25 min (Mock)' } }] }] });
  }

  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&mode=driving&key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}
