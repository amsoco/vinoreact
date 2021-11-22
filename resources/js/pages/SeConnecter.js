import React, { useState } from "react";
import User from "../apis/User";
import { useUser } from "../context/user";
import styled from 'styled-components'

// styled components
const Legend = styled.legend`
    color: hotpink;
    font-size: 3rem;
`

const SeConnecter = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const loginUser = async (e) => {
        e.preventDefault();
        await User.seConnecter(loginForm);
    };

    const { user } = useUser()
    console.log('user', user)

    return (
        <form onSubmit={loginUser}>
            <Legend>Login Form</Legend>
            <label htmlFor="email">Email</label>
            <input
                type="email"
                name="email"
                value={loginForm.email}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleChange}
            />
            <button type="submit">Se connecter</button>
        </form>
    );
};

export default SeConnecter;
