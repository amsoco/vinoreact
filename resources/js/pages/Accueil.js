import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";
import styled from "styled-components";
import User from "../apis/User";

// styled components
const Message = styled.h1`
    color: hotpink;
    font-size: 3rem;
`;

const Email = styled.p`
    color: green;
`;

// React Component
const Accueil = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    // logout le user
    const logout = async () => {
        await User.logout();
        navigate("/");
    };

    if (user === null) return <p>Loading user...</p>;
    return (
        <div>
            <Message>Salut {user.name}</Message>
            <Email>{user.email}</Email>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Accueil;
