import axios from "axios";
import { setLocalStorage, tokens } from "../utils/helpers";

const BASE_URL_API = process.env.BASE_URL_API
const BASE_URL = process.env.BASE_URL

const { getRefreshToken, getAccessToken } = tokens()

const axiosInstance = axios.create({
  baseURL: BASE_URL_API,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers["Authorization"] = accessToken;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);


//response interceptor to refresh token on receiving token expired error
axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getRefreshToken();

    if (refreshToken && error.response.status === 401 && !originalRequest._retry) {

      originalRequest._retry = true;
      try {
        const token = { refresh_token: refreshToken }
        return await axios
          .post(`${BASE_URL_API}`, token)
          .then((res) => {

            if (res.status === 201) {
              const tokens = res?.data?.data
              setLocalStorage('tokes', tokens)
              return axiosInstance(originalRequest)
            }
          });
      }
      catch (_error) {
        localStorage.clear()
        window.location.href = `${BASE_URL}signin`
        return Promise.reject(_error)
      }

    }
    return Promise.reject(error);
  }
);

export default axiosInstance;