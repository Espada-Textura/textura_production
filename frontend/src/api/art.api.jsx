import axios from "axios";

const artApi = axios.create({
  baseURL: "https://web.textura-art.com/api",
  AccessControlAllowOrigin: "*",
  AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
});

export default artApi;
