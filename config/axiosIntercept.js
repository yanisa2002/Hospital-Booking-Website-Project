import axios from "axios";
import api_url from "../src/url/api";

const axiosIntercept = axios.create({
  baseURL: api_url,
  timeout: 10000,
});

axiosIntercept.interceptors.request.use(
  (request) => {
    request.headers.authorization["x-access-token"] =
      localStorage.getItem("token");
    return request;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosIntercept.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const data = JSON.parse(JSON.stringify(err));

    if (data.status == 401 || data.status == 403) {
      localStorage.removeItem("authentication");
      if (window.location.pathname != "/") window.location = "/";
    }

    if (data.status == 404) {
      // if (window.location.pathname != '/error') window.location = '/error'
      console.log(JSON.parse(JSON.stringify(err)));
    }

    if (data.status == 409) {
      localStorage.removeItem("authentication");
      if (window.location.pathname != "/") window.location = "/";
    }

    if (JSON.parse(JSON.stringify(err)).status <= 400) {
      localStorage.setItem("authentication", true);
    }
    return Promise.reject(err);
  }
);

export default axiosIntercept;
