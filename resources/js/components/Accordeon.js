import React, { useState } from "react";
import { AccordeonSection } from './styles/Accordeon.styled.js';
import Chevron from "../assets/svg/chevronBlack.svg";

const Accordeon = (props) => {

    return (
        <AccordeonSection>
            <button>
                <p>{props.titre}</p>
                <img src={Chevron} alt="chevronBlack"/>
            </button>
            <div>

            </div>
        </AccordeonSection>
    )
}

export default Accordeon;