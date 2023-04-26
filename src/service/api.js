import axios from 'axios';

import { getUser } from './auth';

// export const SERVICE_URL = 'http://localhost:3000';
export const SERVICE_URL = 'https://srs-server.onrender.com';

const instance = axios.create({
  baseURL: `${SERVICE_URL}/api`,
  timeout: 10000
});

instance.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${getUser()}`;
  return config;
});

export default instance;
