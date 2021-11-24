import { useState, useEffect } from "react";
import User from "../apis/User";

const useProvideUser = () => {
    const [user, setUser] = useState(null);

    // fetch le user
    useEffect(() => {
        const getCurrentUser = () => User.getUsager();
        getCurrentUser().then(({ data: user }) => setUser(user));
    }, []);

    return { user };
};

export default useProvideUser;
