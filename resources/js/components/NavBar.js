import React, { useState } from "react";
import { NavBarCountainer } from './styles/Navbar.styled.js';
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";


const navBar = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setRotate, setRotateState] = useState("0");
    const [setRotateNegative, setRotateStateNega] = useState("0");
    const [setTranslateDown, setStateTranslateDowm] = useState("0");
    const [setTranslateUp, setStateTranslateUp] = useState("0");
    const [setDisplay, setStateDisplay] = useState("");

    const ouvrirMenu = (props) => {
        console.log('ouvir')

        setActiveState(setActive === "" ? "active" : "");

        setRotateState(
            setActive === "active" ? "0" : "-45deg"
        );
        setRotateStateNega(
            setActive === "active" ? "0" : "45deg"
        );
        setStateTranslateDowm(
            setActive === "active" ? "0" : "4px"
        );
        setStateTranslateUp(
            setActive === "active" ? "0" : "-4px"
        );
        setStateDisplay(
            setActive === "active" ? "100%" : "0"
        );
    }

    return (
        <NavBarCountainer rotate={setRotate} rotateNegative={setRotateNegative} translateDown={setTranslateDown} translateUp={setTranslateUp} display={setDisplay}>
            <div onClick={ouvrirMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <img src={LogoVino}  alt="chevronBlack"/>
            <img src={CercleX}  alt="chevronBlack"/>
        </NavBarCountainer>
    )
}

export default navBar;