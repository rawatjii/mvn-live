// src/admin/api/generateApi.js
import axios from 'axios';
import { API_BASE_URL } from '../../config/config';

const getAuthHeader = () => {
  const token = localStorage.getItem('token'); 
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const generateApi = (endpoint) => {
  const baseUrl = `${API_BASE_URL}/${endpoint}`;

  return {
    get: () => {
      const headers = getAuthHeader();
      console.log("🔐 Request Headers:", headers); 
      return axios.get(baseUrl, { headers });
    },
    create: (data) => axios.post(baseUrl, data, { headers: getAuthHeader() }),
    update: (id, data) => axios.put(`${baseUrl}/${id}`, data, { headers: getAuthHeader() }),
    delete: (id) => axios.delete(`${baseUrl}/${id}`, { headers: getAuthHeader() })
  };
};

export default generateApi;
