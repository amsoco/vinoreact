<<<<<<< HEAD
import React, { useState } from "react";
import { NavBarCountainer } from "./styles/Navbar.styled.js";
import { Link, useParams } from "react-router-dom";
=======
import React, { useState, useEffect } from "react";
import { NavBarCountainer } from "./styles/Navbar.styled.js";
>>>>>>> upstream/main
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";
import Accordeon from "./Accordeon";
import { useUser } from "../context/user";
import { Button } from "./styles/Button.styled";

const navBar = (props) => {
    const { logout } = useUser();
    const [setActive, setActiveState] = useState("");
    const [setRotate, setRotateState] = useState("0");
    const [setRotateNegative, setRotateStateNega] = useState("0");
    const [setTranslateDown, setStateTranslateDowm] = useState("0");
    const [setTranslateUp, setStateTranslateUp] = useState("0");
    const [setDisplay, setStateDisplay] = useState("");
    const [setWidth, setWitdthState] = useState("0px");
    const [setTanslateMenu, setStateTranslateMenu] = useState("0");
<<<<<<< HEAD
    const params = useParams()
=======
    const [setHeight, setStateHeightMenu] = useState(window.innerHeight - 60);
>>>>>>> upstream/main

    // ou clic on ouvre le menu
    const ouvrirMenu = (props) => {
        // vérifier l'état
        setActiveState(setActive === "" ? "active" : "");

        // Rotation du x transformation
        setRotateState(setActive === "active" ? "0" : "-45deg");
        setRotateStateNega(setActive === "active" ? "0" : "45deg");

        // Translation du x transformation
        setStateTranslateDowm(setActive === "active" ? "0" : "4px");
        setStateTranslateUp(setActive === "active" ? "0" : "-4px");

        // Opacité de la ligne centrale
        setStateDisplay(setActive === "active" ? "100%" : "0");
<<<<<<< HEAD

        setWitdthState(setActive === "active" ? "0" : "100%");

        setStateTranslateMenu(setActive === "active" ? "0" : "400px");

        // useEffect(() => {
        //     if (localStorage.getItem("cellier")) {
        //         const { id, nom_cellier } = JSON.parse(
        //             localStorage.getItem("cellier")
        //         );
        //         setCellier(nom_cellier);
        //     }
        // }, []);
    };
=======

        setWitdthState(setActive === "active" ? "0" : "100%");

        setStateTranslateMenu(setActive === "active" ? "0" : "400px");
    };

    useEffect(() => {
        // https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react
        // listener sur windows dans le useEffect doit être supprimé dans la clean up fonction du useEffect
        // sans quoi le listener continue d'être actif même si tu quittes la page --> memory leak et crash de l'app
        window.addEventListener("resize", menuSizing);
        return function cleanupListener() {
            window.removeEventListener("resize", menuSizing);
        };
    });

    // trouver la mesure de l'écran pour ne pas dépasser la hauteur visible.
    const menuSizing = (e) => {
        const height = window.innerHeight - 60;
        setStateHeightMenu(height);
    };

>>>>>>> upstream/main
    return (
        <NavBarCountainer
            rotate={setRotate}
            rotateNegative={setRotateNegative}
            translateDown={setTranslateDown}
            translateUp={setTranslateUp}
            display={setDisplay}
            translateMenu={setTanslateMenu}
<<<<<<< HEAD
=======
            menuHeight={setHeight}
>>>>>>> upstream/main
        >
            <nav>
                <div onClick={ouvrirMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src={LogoVino} alt="chevronBlack" />
<<<<<<< HEAD
                <Link to={`/${params.cellier}/nouvelle-bouteille`}>
                    <img src={CercleX} alt="chevronBlack" />
                </Link>
=======
                <img src={CercleX} alt="chevronBlack" />
>>>>>>> upstream/main
            </nav>
            {/* <ul style={{ width: `${setWidth}` }} > */}
            <ul>
                <h4>Menu vino</h4>
                <li>
                    <Accordeon
                        titre="Recherche détaillé"
                        content="formulaire de recherche"
                    ></Accordeon>
                </li>
                <li>
                    <Accordeon
                        titre="Mon Compte"
<<<<<<< HEAD
                        content="formulaire rechecher"
=======
                        content="formulaire de recherche"
>>>>>>> upstream/main
                    ></Accordeon>
                </li>
                <li>
                    <p onClick={() => logout()}>Logout</p>
                </li>
                {/* <li><Accordeon titre='Prix' content="patate"></Accordeon></li>
                <li><Accordeon titre='Cépage' content="patate"></Accordeon></li>
                <li><Accordeon titre='Pays' content="patate"></Accordeon></li>
                <li><Accordeon titre="Date d'achat" content="patate"></Accordeon></li>
                <li><Accordeon titre='Rupture de stock' content="patate"></Accordeon></li> */}
                {/* <li>
                    <Link to="/">Mon Compte</Link>

                </li> */}
                {/* <li>
                <Button
                    bg="#fff"
                    color="#303031"
                    colorHover="#fff"
                    bgHover="#303031"
                >
                    RAFRAICHIR
                </Button>
                <Button bg="#303031" color="#fff">
                    RECHERCHE
                </Button>
                </li> */}
            </ul>
        </NavBarCountainer>
    );
};

export default navBar;
