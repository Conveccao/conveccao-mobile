import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:8082',
  // baseURL: 'https://conveccao.onrender.com/',
  baseURL: "http://137.184.16.141:8081",
});

export default api;