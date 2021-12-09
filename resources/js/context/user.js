import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Http from "../HttpClient";

// création du contexte User
const UserContext = createContext();

// fonction pour rendre disponible le user et les méthodes d'auth via le context API
export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    // fetch l'utilisateur connecté
    useEffect(() => {
        const connected = localStorage.getItem("connected");
        if (connected) {
            getMe();
        }
    }, []);

    // get current user
    const getMe = async () => {
        try {
            const { data } = await Http.get("user");
            setUser({
                ...data.user,
                celliers: data.celliers,
            });
        } catch (error) {
            setUser(false);
        }
    };

    // log l'utilisateur
    const login = async (creds) => {
        await Http.get("sanctum/csrf-cookie");
        const { data } = await Http.post("login", creds);
        sessionStorage.setItem("user", data.user.id);
        localStorage.setItem("connected", "truth");
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    // enregistre le nouvel utilisateur
    const register = async (creds) => {
        //await Http.get("sanctum/csrf-cookie");
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
        localStorage.clear(); //destroy "connected" and "cellier"
        navigate("/");
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
