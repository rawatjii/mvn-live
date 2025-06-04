import axios from 'axios';
import { API_BASE_URL } from '../../config/config';

const getAuthHeader = () => {
  const token = localStorage.getItem('token'); 
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const generateApi = (endpoint,callVia,changeEndpointVia) => {


  console.log(endpoint)
  const baseUrl = `${API_BASE_URL}/${endpoint}`;

  return {
    get: (custom_url) => {
    if(callVia!=0){
      const headers = getAuthHeader();
      console.log("🔐 Request Headers:", headers); 
      if(!custom_url){
        return axios.get(baseUrl, { headers });
      }else{
        return axios.get(`${API_BASE_URL}/${custom_url}`, { headers });
      }
      }
    },
    create: (data) => axios.post(baseUrl, data, { headers: getAuthHeader() }),
    update:changeEndpointVia==1?  (data) => axios.post(`${baseUrl}`, data, { headers: getAuthHeader() }):(id, data) => axios.put(`${baseUrl}/${id}`, data, { headers: getAuthHeader() }),
    delete: (id) => axios.delete(`${baseUrl}/${id}`, { headers: getAuthHeader() }),
    editGet: (data) => axios.post(`${baseUrl}`,data,{ headers: getAuthHeader() }),
    editMultApiCall: (data) => axios.get(`${baseUrl}`,{ headers: getAuthHeader() })


  };
};

export default generateApi;
