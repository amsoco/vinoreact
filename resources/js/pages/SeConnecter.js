import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";
import styled from "styled-components";

// styled components
const Legend = styled.legend`
    color: hotpink;
    font-size: 3rem;
`;

const SeConnecter = () => {
    const {user, login} = useUser();
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const resetForm = () => {
        setLoginForm({
            email: "",
            password: "",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const loginUser = async (e) => {
        e.preventDefault();
        await login(loginForm);
        resetForm();
        navigate("/vino");
    };

    return (
        <form onSubmit={loginUser}>
            <Legend>Login Form</Legend>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="emai"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
            />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default SeConnecter;
