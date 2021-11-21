import { useEffect, useState } from "react";
import User from "../apis/User";

const useAuthListener = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getCurrentUser = () => {
            return User.getUsager();
        };

        getCurrentUser().then(({ data: user }) => {
            if (user) {
                setUser(user);
            }
        });
    }, []);

    return user;
};

export default useAuthListener;
