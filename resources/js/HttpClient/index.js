import axios from "axios";

// création du client HTTP
const Http = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
});

export default Http;
