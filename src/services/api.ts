import axios from "axios";

const api = axios.create({
  baseURL: "https://cloud.iexapis.com/stable/stock",
  params: {
      token: 'pk_b53e449cd3d4462cbefa48d985a0ccb9'
  }
});

export default api;