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
        sessionStorage.setItem("privilege", data.user.privilege_id);
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

    // enregistre le nouvel utilisateur
    const updateUsager = async (creds) => {
        const { data } = await Http.put(`/user/edit/${creds.id}`, creds);
    };

    // déconnecte l'utilisateur
    const logout = async () => {
        await Http.post("logout");
        setUser(false);
        localStorage.clear(); //destroy "connected" and "cellier"
        navigate("/");
    };

    //get les users
    const getUsagers = async () => {
        const usagers = await Http.get(`/users`);
        return usagers;
    };

    // rechercher des usagers
    const searchUsager = (search) => Http.get(`search/${search}`);

    const deleteUsager = async (id) => {
        const usagers = await Http.delete(`/user/${id}`);
        return usagers;
    };
    //put('/user/edit/{id}

    return (
        <UserContext.Provider value={{ user, login, register, logout, getUsagers, deleteUsager, updateUsager, searchUsager }}>
            {children}
        </UserContext.Provider>
    );
};

// custom hook qui retourne le user connecté - à appeler à l'intérieur du Provider
export const useUser = () => {
    return useContext(UserContext);
};
