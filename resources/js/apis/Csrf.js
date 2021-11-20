import Api from "./Api";

export default {
    // set the csrf cookie in the browser
    getCookie() {
        return Api.get("csrf-cookie");
    },
};
