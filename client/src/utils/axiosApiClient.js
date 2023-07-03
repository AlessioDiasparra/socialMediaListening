import axios from "axios";

//istanza axios
const axiosApiClient = axios.create({
  baseURL: "https://test3.ecostampa.net/postpickr"
});

async function loginUser({ username, password }) {
  try {
    const { data } = await axiosApiClient.post("/login", { username, password });
    return data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
}

axiosApiClient.interceptors.request.use(
  config => {
    const token = window.localStorage?.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  error => {
    if (error.response.status === 401) {
      window.localStorage.removeItem("token");
    }
  }
);

axiosApiClient.interceptors.response.use(
  response =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      window.localStorage.removeItem("token");
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      originalRequest._retry = true;
      window.localStorage.removeItem("token");
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      window.localStorage.removeItem("token");
      return Promise.reject(error);
    }
    if (error.response.status === 404) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      window.localStorage?.removeItem("token");
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }
);

export { axiosApiClient, loginUser };
