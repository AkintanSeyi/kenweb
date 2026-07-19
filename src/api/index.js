
import axios from "axios";

const axiosInstance = axios.create({
 
  baseURL:  "https://energydaobackend.onrender.com" ,   // https://seal-app-ivge2.ondigitalocean.app // http://localhost:5000    "https://starfish-app-njk48.ondigitalocean.app"
});  //http://localhost:5000   https://asap-backend-5v3x.onrender.com

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const donate = async (formdata) =>
  axiosInstance.post("/api/donate", formdata);