import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.moego.com/', // Replace with actual base URL
  headers: {
    Authorization: `Bearer ${process.env.MOEGO_API_KEY}`, // Add to .env
  },
});

export default apiClient;