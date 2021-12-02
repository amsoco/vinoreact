import React from "react";
import { useUser } from "../context/user";
import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
    const { user } = useUser();

    console.log('user', user)

    if(user === null) return null
    return user ? (
        children
    ) : (
        <Navigate to="/" replace state={{ path: location.pathname }} />
    );
};

export default RequireAuth;
