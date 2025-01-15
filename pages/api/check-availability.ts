import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { lat, lng, date } = req.body;

  try {
    const result = await pool.query(
      `
      SELECT appointment_time, latitude, longitude
      FROM appointments
      WHERE DATE(appointment_time) = $1
      `,
      [date]
    );

    const appointments = result.rows;
    const availableSlots = [];

    for (const appointment of appointments) {
      // Use Google Maps Distance Matrix API to calculate travel time
      const travelTime = 20; // Mock travel time; integrate Distance Matrix API here.

      if (travelTime <= 30) {
        availableSlots.push({
          time: appointment.appointment_time,
          travelTime,
        });
      }
    }

    res.status(200).json({ availableSlots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}