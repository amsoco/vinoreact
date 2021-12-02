import React  from "react";
import { ButtonBackUp } from "./styles/Button.styled";
import Chevron from "../assets/svg/chevron.svg";

const BackUp = () => {

    // renvoyer en haut de la page
    const retournerHaut = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    // composant bouton retourner en haut
    return (
        <ButtonBackUp onClick={retournerHaut}>
            <img src={Chevron}  alt="chevron"/>
        </ButtonBackUp>
    )
}

export default BackUp;