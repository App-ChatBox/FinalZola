import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
//let token = localStorage.getItem("token");
const axiosClient = axios.create({
  // baseURL: "http://54.251.19.43:5000/",
  baseURL: "http://172.28.163.48:5000/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

axiosClient.interceptors.request.use(
  function  (config) {
    
    return config;
    
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (reponse) {
    return reponse;
  },
  function (error) {
    console.log("ERROR REPONSE: ", error.response);
    const { config, status, data } = error.response;
    if (config.url === "/users/GetUserByPhone" && status === 403) {
      const error = data.error.message;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);
export default axiosClient;
