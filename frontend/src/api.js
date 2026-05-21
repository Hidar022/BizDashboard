import axios from "axios";

const api = axios.create({
  // SWAP THIS: Change from local 127.0.0.1 to your live production API URL
  baseURL: "https://biz-dashboard-pearl.vercel.app", 
});

// This "Interceptor" runs before every request to the backend
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access"); // Look for the key in browser storage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Put the key in the header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;