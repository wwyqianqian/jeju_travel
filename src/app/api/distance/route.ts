import { NextResponse } from 'next/server';

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const origin = searchParams.get('origins');
  const destination = searchParams.get('destinations');
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!origin || !destination) {
    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  }

  const [lat1, lon1] = origin.split(',').map(Number);
  const [lat2, lon2] = destination.split(',').map(Number);

  if (!apiKey || apiKey.includes('test_key')) {
    // Dynamic Mock based on Haversine formula
    const distanceKm = calculateDistance(lat1, lon1, lat2, lon2);
    // Assume average speed of 40 km/h
    const timeHours = distanceKm / 40;
    const timeMinutes = Math.max(1, Math.round(timeHours * 60)); // at least 1 min
    return NextResponse.json({ rows: [{ elements: [{ duration: { text: `~${timeMinutes} min (估算)` } }] }] });
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
