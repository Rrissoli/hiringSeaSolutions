import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001', // Define a URL base das requisições
  headers: {
    common: {
      'Authorization': 'Bearer token', // Define o cabeçalho de autorização padrão
    },
    post: {
      'Content-Type': 'application/json', // Define o cabeçalho Content-Type para requisições POST
    },
  },
});

export default axiosInstance;
