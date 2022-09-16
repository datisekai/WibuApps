import axios from "axios";

const axiosClient = axios.create({
  baseURL: `http://192.168.1.9:6060/v1`,
  timeout: 10000,
});

export default axiosClient;
