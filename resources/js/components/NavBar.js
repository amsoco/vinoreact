import React, { useState } from "react";
import { NavBarCountainer } from './styles/Navbar.styled.js';
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";
import Accordeon from "./Accordeon";
import { Link } from "react-router-dom";
import { useUser } from "../context/user";


const navBar = (props) => {

    const {logout} = useUser();
    const [setActive, setActiveState] = useState("");
    const [setRotate, setRotateState] = useState("0");
    const [setRotateNegative, setRotateStateNega] = useState("0");
    const [setTranslateDown, setStateTranslateDowm] = useState("0");
    const [setTranslateUp, setStateTranslateUp] = useState("0");
    const [setDisplay, setStateDisplay] = useState("");
    const [setWidth, setWitdthState] = useState("0px");


    const ouvrirMenu = (props) => {

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
        setWitdthState(
            setActive === "active" ? "0" : "100%"
        );



    }

    const out = () => {
        logout();
      }

    return (
        <NavBarCountainer rotate={setRotate} rotateNegative={setRotateNegative} translateDown={setTranslateDown} translateUp={setTranslateUp} display={setDisplay}>
            <nav>
                <div onClick={ouvrirMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src={LogoVino}  alt="chevronBlack"/>
                <img src={CercleX}  alt="chevronBlack"/>
            </nav>
            <ul style={{ width: `${setWidth}` }} >
                <li><Accordeon titre='Annnée' content="patate"></Accordeon></li>
                <li><Accordeon titre='Prix' content="patate"></Accordeon></li>
                <li><Accordeon titre='Cépage' content="patate"></Accordeon></li>
                <li><Accordeon titre='Pays' content="patate"></Accordeon></li>
                <li><Accordeon titre="Date d'achat" content="patate"></Accordeon></li>
                <li><Accordeon titre='Rupture de stock' content="patate"></Accordeon></li>
                <li>
                    <Link to="/">Mon Compte</Link>
                    <Link onClick={out} to="/">Logout</Link>
                </li>

            </ul>
        </NavBarCountainer>
    )
}

export default navBar;