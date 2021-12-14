import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Http from "../HttpClient";

/**
 * Création du contexte User
 */
const UserContext = createContext();

/**
 * Création du Provider User
 */
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

    /**
     * Récupérer l'utilisateur connecté
     * @returns {void}
     */
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

    /**
     * Login un utilisateur
     * @param {object} creds
     * @returns {void}
     */
    const login = async (creds) => {
        await Http.get("sanctum/csrf-cookie");
        const { data } = await Http.post("login", creds);
        sessionStorage.setItem("user", data.user.id);
        sessionStorage.setItem("privilege", data.user.privilege_id);
        localStorage.setItem("connected", "truth");
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    /**
     * Enregistrer un nouvel utilisateur
     * @param {object} creds
     * @returns {void}
     */
    const register = async (creds) => {
        const { data } = await Http.post("register", creds);
        setUser({
            ...data.user,
            celliers: data.celliers,
        });
    };

    /**
     * Déconnecter un utilisateur
     * @returns {void}
     */
    const logout = async () => {
        await Http.post("logout");
        setUser(false);
        localStorage.clear(); //destroy "connected" and "cellier"
        navigate("/");
    };

    /**
     * Récupérer tous les utilisateurs
     * @returns {array}
     */
    const getUsagers = async () => Http.get(`/users`);

    return (
        <UserContext.Provider
            value={{ user, login, register, logout, getUsagers }}
        >
            {children}
        </UserContext.Provider>
    );
};

/**
 * Hook pour appeler les différentes méthodes offertes par le Provider
 */
export const useUser = () => {
    return useContext(UserContext);
};
