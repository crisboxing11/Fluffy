// import { NextApiRequest, NextApiResponse } from 'next';
// import apiClient from '../../utils/apiClient';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'GET') {
//     try {
//       const response = await apiClient.get('/appointments');
//       res.status(200).json(response.data);
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch appointments' });
//     }
//   } else {
//     res.status(405).end(); // Method Not Allowed
//   }
// }