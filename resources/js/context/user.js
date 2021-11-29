import { createContext, useContext, useState, useEffect } from "react";
import Http from "../HttpClient";

// création du contexte User
const UserContext = createContext();

// fonction pour rendre disponible le user et les méthodes d'auth via le context API
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // fetch l'utilisateur connecté
    useEffect(() => {
        getMe().then(({data}) => {
            setUser({
                ...data.user,
            celliers: data.celliers,
            });
        });
    }, []);

    // get current user
    const getMe = async () => {
        return Http.get("user");
       // await Http.get("csrf-cookie");
       /*
        const { data } = await Http.get("user", {withCredentials: true});
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
        */
    };

    // log l'utilisateur
    const login = async (creds) => {
        await Http.get("csrf-cookie");
        const { data } = await Http.post("login", creds);
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    // enregistre le nouvel utilisateur
    const register = async (creds) => {
        await Http.get("csrf-cookie");
        const { data } = await Http.post("register", creds);
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    // déconnecte l'utilisateur
    const logout = async () => {
        await Http.post("logout");
        setUser(false);
    };

    return (
        <UserContext.Provider value={{ user, login, register, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// custom hook qui retourne le user connecté - à appeler à l'intérieur du Provider
export const useUser = () => {
    return useContext(UserContext);
};
