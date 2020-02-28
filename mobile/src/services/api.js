import axios from 'axios';

// baseURL via USB: 'http://192.168.0.14:3333'
// baseURL via Genymotion: 'http://10.0.3.2:3333'
const api = axios.create({
  baseURL: 'http://10.0.3.2:3333',
});

export default api;
