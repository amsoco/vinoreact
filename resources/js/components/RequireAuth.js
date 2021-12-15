import React from "react";
import { useUser } from "../context/user";
import { Navigate , useNavigate} from "react-router-dom";


const RequireAuth = ({ children }) => {
    const { user } = useUser();
    const navigate = useNavigate();


    /// l'admin a accès a tout les routes présentement ajustement si possible.
    // Par contre comme l'admin n'a pas de cellier c'est impossible de naviguer la l'application

    if (user === null) return null;
    return user ? (
        children
    ) : (
        <Navigate to="/" replace state={{ path: location.pathname }} />
    );
};

export default RequireAuth;
