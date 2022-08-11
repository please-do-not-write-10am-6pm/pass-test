import axios from "axios";

const baseURL: string = "http://localhost:3000";

axios.interceptors.request.use(
  (config: any) => {
    const token: string | undefined = process.env.ACCESS_TOKEN;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllStates = () => {
  return axios.get(`${baseURL}/mock/mock.json`);
};

export const getAllStatesData = () => {
  return axios.get(`${baseURL}/mock/states.json`);
};
