import * as customAxios from "axios";

const axios = customAxios.create({
  baseURL: "https://web.textura-art.com/api/",
});

export default axios;
