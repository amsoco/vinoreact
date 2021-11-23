import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const Api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    withCredentials: true,
});

const refreshAuthLogic = (failedRequest) =>
    Api.get("csrf-cookie").then((response) => Promise.resolve());

createAuthRefreshInterceptor(Api, refreshAuthLogic, { statusCodes: [419] });

export default Api;
