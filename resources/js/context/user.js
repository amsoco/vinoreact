import { createContext, useState, useEffect, useContext } from "react";
import User from "../apis/User";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getCurrentUser = () => {
            return User.getUsager();
        };

        getCurrentUser().then(({ data: user }) => setUser(user));
    }, []);

    return (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};
