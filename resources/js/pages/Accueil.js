import React from "react";
import { Select } from "../components/styles/Input.styled";
import { AccueilMain } from "../components/styles/Accueil.styled";
import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
import TacheHaut from "../assets/svg/tacheHaut.svg";
import TacheBas from "../assets/svg/tacheBas.svg";
import LogoVino from "../assets/svg/logo.svg";
import { useUser } from "../context/user";

const Accueil = () => {
    const { user } = useUser();

    return (
        <AccueilMain>
            <img src={TacheHaut} alt="Tache Rouge haut" />
            <h2>Bienvenue dans ton cellier, {user?.name} </h2>
            <img src={BouteilleBlackLogo} alt="Logo Bouteille vino" />
            <img src={LogoVino} alt="Logo Vino" />
            <Select>
                <option>Sélectionne ton cellier</option>
            </Select>
            <img src={TacheBas} alt="Tache Rouge bas" />
        </AccueilMain>
    );
};

export default Accueil;
