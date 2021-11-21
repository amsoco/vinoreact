import React, { useState } from "react";
import User from "../apis/User";

const SeConnecter = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
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

    return (
        <form onSubmit={loginUser}>
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
