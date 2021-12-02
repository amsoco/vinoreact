import React  from "react";
import { ButtonBackUp } from "./styles/Button.styled";
import Chevron from "../assets/svg/chevron.svg";

const BackUp = () => {

    const retournerHaut = () => {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <ButtonBackUp onClick={retournerHaut}>
            <img src={Chevron}  alt="chevron"/>
        </ButtonBackUp>
    )
}

export default BackUp;