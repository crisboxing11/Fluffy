import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lng, date } = req.body;

  try {
     if (!lat || !lng || !date) {
      return res.status(400).json({ error: 'Latitude, longitude, and date are required' });
    }
    const result = await pool.query(
      `
      SELECT id, appointment_time, ST_Distance(location, ST_MakePoint($1, $2)::geography) AS distance
      FROM appointments
      WHERE DATE(appointment_time) = $3
      AND ST_DWithin(location, ST_MakePoint($1, $2)::geography, 5000)
      ORDER BY appointment_time
      `,
      [lng, lat, date]
    );
     if (result.rows.length === 0) {
      return res.status(404).json({ error: 'No available slots found for the given date and location' });
    }
    res.status(200).json({ availableSlots: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}