import React, { useState } from "react";
import { MonCompteCountainer } from "../components/styles/MonCompte.styled.js";
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";
import Accordeon from "../components/Accordeon";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";
import { Button } from "../components/styles/Button.styled";
import AddCellierForm from "../components/Forms/AjoutCellier";

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
                        content={
                            <ul>
                                {user?.celliers.map((cellier) => {
                                    return (
                                        <li key={cellier.id}>
                                            {cellier.nom_cellier}
                                        </li>
                                    );
                                })}
                            </ul>
                        }
                    ></Accordeon>
                </li>
                <li>
                    <Accordeon
                        titre="Ajouter Cellier"
                        // content={<AddCellierForm />}
                    ></Accordeon>
                </li>
            </ul>
        </MonCompteCountainer>
    );
};

export default MonCompte;
