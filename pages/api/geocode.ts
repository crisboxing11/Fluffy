import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { address } = req.body;

    if (!address) {
      return res.status(400).json({ error: 'Address is required' });
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
      return res.status(400).json({ error: 'Invalid address or address not found' });
    }

    const location = data.results[0].geometry.location;
    res.status(200).json({ lat: location.lat, lng: location.lng });
  } catch (error) {
    console.error('Geocode API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}