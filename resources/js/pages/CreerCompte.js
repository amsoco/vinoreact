import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/user";

const CreerCompte = () => {
    const { register } = useUser();
    const navigate = useNavigate();
    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const registerUser = async (e) => {
        e.preventDefault();
        await register(registerForm)
        navigate("/vino");
    };

    return (
        <form onSubmit={registerUser}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={registerForm.name}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={registerForm.emai}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                value={registerForm.password}
                onChange={handleChange}
            />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                value={registerForm.password_confirmation}
                onChange={handleChange}
            />
            <button type="submit">Créer compte</button>
        </form>
    );
};

export default CreerCompte;
