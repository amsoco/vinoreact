import { createContext, useContext, useState, useEffect } from "react";
import Http from "../HttpClient";

// création du contexte User
const UserContext = createContext();

// fonction pour rendre disponible le user et les méthodes d'auth via le context API
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // fetch l'utilisateur connecté
    useEffect(() => {
        let disposed = false;
        getMe().then(({ data: user }) => setUser(user));
        return () => (disposed = true);
    }, []);

    // get user
    const getMe = () => Http.get("user");

    // log l'utilisateur
    const login = async (creds) => {
        await Http.get("csrf-cookie");
        const { data } = await Http.post("login", creds);
        setUser(data.user);
    };

    // enregistre le nouvel utilisateur
    const register = async (creds) => {
        await Http.get("csrf-cookie");
        const { data } = await Http.post("register", creds);
        setUser(data.user);
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
