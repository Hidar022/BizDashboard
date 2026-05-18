import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", // Your Django URL
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