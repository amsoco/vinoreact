import Api from "./Api";

export default {
    creerCompte(data) {
        return Api.post("register", data);
    },
};
