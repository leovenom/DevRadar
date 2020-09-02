import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-radar-leo.herokuapp.com/'
});

export default api;