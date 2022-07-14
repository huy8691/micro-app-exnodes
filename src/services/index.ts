import axios from "axios";
let urlApi = "http://192.168.31.20:3000/";
// let urlApi = "https://api-dev.vuarausach.vn/";

const callAPI = axios.create({
  baseURL: urlApi,
  timeout: 10000,
  timeoutErrorMessage: "Timeout error",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

callAPI.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (err.response && err.response.status === 401) {
      alert("401");
    }
    if (err.response && err.response.status === 403) {
      alert("403");
    }
    return Promise.reject(err);
  }
);

export { callAPI };
