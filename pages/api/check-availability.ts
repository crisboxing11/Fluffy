import type { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lng, date } = req.body;

  try {
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

    res.status(200).json({ availableSlots: result.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}