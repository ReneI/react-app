import axios from 'axios';
const clientAxios = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 100000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default clientAxios;