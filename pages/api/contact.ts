import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Example: Log data or save to a database
      console.log({ name, email, message });

      res.status(200).json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      res.status(500).json({ success: false, error: 'Failed to send message.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}