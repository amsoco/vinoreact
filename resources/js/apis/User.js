import Api from "./Api";
import Csrf from "./Csrf";

export default {
    async creerCompte(data) {
        await Csrf.getCookie();
        return Api.post("register", data);
    },
    async seConnecter(data) {
        await Csrf.getCookie();
        return Api.post("login", data);
    },
};
