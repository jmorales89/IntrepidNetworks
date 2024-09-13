import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  responseType: "json",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_BACKEND_API_KEY}`,
  },
});
