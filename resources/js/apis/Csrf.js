import Api from "./Api";

export default {
    // set the csrf cookie in the browser
    async getCookie () {
        return Api.get("csrf-cookie");
    },
};
