import axios from "axios";

const artApi = axios.create({
  baseURL: "https://web.textura-art.com/api/",
});

export default artApi;
