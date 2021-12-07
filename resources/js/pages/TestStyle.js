//import { Button, ButtonBackUp } from '../components/styles/Button.styled';
//import { Input, Select } from '../components/styles/Input.styled';
//import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
//mport Chevron from "../assets/svg/chevron.svg";
import Accordeon from "../components/Accordeon";
import React, { useState } from "react";
import NavBar from "../components/NavBar";
import BackUp from "../components/BackUp";
import CellierBouteille from "../components/CellierBouteille";
import Input from "../components/Input";

const TestStyle = () => {
    const test = () => {
        console.log("test");
    };

    const backTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div>
            {/* <Button
    //             onClick={() => test()}
    //             bg="#fff"
    //             color="#303031"
    //             colorHover="#fff"
    //             bgHover="#303031"
    //         >
    //             AJOUTER
    //         </Button>
    //         <Button bg="#303031" color="#fff">
    //             BOIRE
    //         </Button >
    //         <Input placeholder="Nom Usager" ></Input> */}
            // {/* <NavBar></NavBar> */}
            //{" "}
            {/* <CellierBouteille></CellierBouteille>
    //         <CellierBouteille></CellierBouteille>
    //         <CellierBouteille></CellierBouteille>
    //         <CellierBouteille></CellierBouteille> */}
            // {/* <BackUp></BackUp> */}
            // {/* <Input/> */}
            //{" "}
            {/* <Accordeon titre='Description' content="Vin mousseu bon"></Accordeon>
    //         <Accordeon titre='Modification' content={  <Select>
   
    //             </Select>}>                   <option>Cellier</option>
    //         </Accordeon> */}
            // {/* /// <img src={BouteilleBlackLogo} alt="logo" />  */}
        </div>
    );
};

export default TestStyle;
