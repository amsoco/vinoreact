import React, { useState } from "react";
import { NavBarCountainer } from './styles/Navbar.styled.js';
import LogoVino from "../assets/svg/logo.svg";
import CercleX from "../assets/svg/rondX.svg";


const navBar = (props) => {


    return (
        <NavBarCountainer>
            <div>
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