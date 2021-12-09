import React, { useState } from "react";
import { MonCompteCountainer } from "../components/styles/MonCompte.styled.js";
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";
import Accordeon from "../components/Accordeon";
import ListCelliers from "../components/ListCelliers";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { Button } from "../components/styles/Button.styled";
import AddCellierForm from "../components/Forms/AjoutCellier/index.js";

import LoginForm from "../components/Forms/LoginForm";
import { AuthLayout } from "../components/styles/AuthLayout.styled";

const MonCompte = () => {
    const { user } = useUser();
    return (
        <MonCompteCountainer>
            <ul>
                <h4>Mon compte</h4>
                <li>
                    <div>{user?.name}</div>
                </li>
                <li>
                    <div>{user?.email}</div>
                </li>
                <li>
                    <Accordeon
                        titre="Celliers"
                        content={<ListCelliers></ListCelliers>}
                    ></Accordeon>
                </li>
                <li>
                    <Accordeon
                        titre="Ajouter Cellier"
                        content={
                            // <AuthLayout>
                            //     <LoginForm />
                            // </AuthLayout>
                        }
                    ></Accordeon>
                </li>
            </ul>
        </MonCompteCountainer>
    );
};

export default MonCompte;
