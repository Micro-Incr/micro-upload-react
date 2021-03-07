import axios from 'axios';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL ? '' : 'http://localhost:8080';
export const MODE = process.env.REACT_APP_SERVER_URL ? 'production' : 'development';

export default axios.create({
  baseURL: `${SERVER_URL}/api/v1`
});
