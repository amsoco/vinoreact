import { createContext, useContext } from "react";
import useProvideUser from "../hooks/useProvideUser";

// création du contexte User
const UserContext = createContext();

// fonction pour rendre disponible notre User via le context API
export const UserProvider = ({ children }) => {
    const { user } = useProvideUser();

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

// custom hook qui retourne le user connecté - à appeler à l'intérieur du Provider
export const useUser = () => {
    return useContext(UserContext);
};
