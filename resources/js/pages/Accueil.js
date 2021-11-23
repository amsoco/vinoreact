import React from "react";
//import User from "../apis/User";
import { Input, Select } from '../components/styles/Input.styled';
import { AccueilMain } from '../components/styles/Accueil.styled';
import BouteilleBlackLogo from "../assets/svg/bouteilleBlack.png";
import TacheHaut from "../assets/svg/tacheHaut.svg";
import TacheBas from "../assets/svg/tacheBas.svg";
import LogoVino from "../assets/svg/logo.svg";




const Accueil = (props) => {

    return (
        <AccueilMain>
                <img src={TacheHaut} alt="Tache Rouge haut" /> 
                <h2>Bienvenue dans ton cellier {props.usagerNom} </h2>
                <img src={BouteilleBlackLogo} alt="Logo Bouteille vino" /> 
                <img src={LogoVino} alt="Logo Vino" /> 
                <Select>
                    <option>Sélectionne ton cellier</option>
                </Select>
                <img src={TacheBas} alt="Tache Rouge bas" /> 
        </AccueilMain>
    )
}

export default Accueil;