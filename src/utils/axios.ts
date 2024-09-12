import axios from "axios";


export default axios.create({
    baseURL: "http://localhost:3000",
    headers: {
    Authorization: `Bearer ${process.env.REACT_APP_BACKEND_API_KEY}`
    }
})