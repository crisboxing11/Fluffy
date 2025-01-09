import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, date, time } = req.body;

    try {
      // Send booking request to MoeGo
      const response = await axios.post(
        `${process.env.MOEGO_BASE_URL}/appointments`,
        {
          client: { name, email },
          appointment: { date, time },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MOEGO_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to create booking.' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' });
  }
}