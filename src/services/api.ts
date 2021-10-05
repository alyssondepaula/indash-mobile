import axios from "axios";

const api = axios.create({
  baseURL: "https://cloud.iexapis.com/stable/stock",
  params: {
      token: 'pk_949199e3305e469b92e4024d302f2383'
  }
});

export default api;