import { createContext, useState, useEffect, useContext } from "react";
import User from "../apis/User";

// création du contexte User
const UserContext = createContext(null);

// fonction pour rendre disponible notre User via le context API
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // fetch le user
    useEffect(() => {
        const getCurrentUser = async () => {
            const { data: currentUser } = await User.getUsager();
            setUser(currentUser);
        };
        getCurrentUser();
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

// custom hook qui retourne le user connecté - à appeler à l'intérieur du Provider
export const useUser = () => {
    return useContext(UserContext);
};
