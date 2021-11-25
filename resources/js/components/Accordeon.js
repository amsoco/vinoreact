import React, { useState , useRef } from "react";
import { AccordeonSection } from './styles/Accordeon.styled.js';
import Chevron from "../assets/svg/chevronBlack.svg";

const Accordeon = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
    const [setRotate, setRotateState] = useState("0");

    const content = useRef(null);

    
    const ouvrirAccordeon = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(

         setActive === "active" ? "0px" : `${content.current.scrollHeight}px`

        );
        console.log(content.current.scrollHeight);
        setRotateState(
            setActive === "active" ? "0" : "-90deg"
            );
    }

    return (
        <AccordeonSection   rotate={setRotate}>
            <button onClick={ouvrirAccordeon}>
                <p>{props.titre}</p>
                <img src={Chevron} alt="chevronBlack"/>
            </button>
            <div ref={content} style={{ height: `${setHeight}` }} >
                <p >{props.content}</p> 
            </div>
        </AccordeonSection>
    )
}

export default Accordeon;