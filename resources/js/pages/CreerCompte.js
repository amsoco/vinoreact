import React, { useState } from "react";
import User from "../apis/User";

const CreerCompte = () => {
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
        await User.creerCompte(registerForm);
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
                name="email"
                value={registerForm.emai}
                onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={registerForm.password}
                onChange={handleChange}
            />
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input
                type="password"
                name="password_confirmation"
                value={registerForm.password_confirmation}
                onChange={handleChange}
            />
            <button type="submit">Créer compte</button>
        </form>
    );
};

export default CreerCompte;
