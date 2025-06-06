import axios from 'axios';

const api = axios.create({
  baseURL: 'https://60a21a08745cd70017576014.mockapi.io/api/v1',
});

export default api;