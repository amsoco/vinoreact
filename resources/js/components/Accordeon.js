import React, { useState } from "react";
import { AccordeonSection } from './styles/Accordeon.styled.js';
import Chevron from "../assets/svg/chevronBlack.svg";

const Accordeon = (props) => {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0px");
   // const [setScaleY, setScaleYState] = useState("0");
    const [setRotate, setRotateState] = useState("0");

    const ouvrirAccordeon = () => {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
         // setActive === "active" ? "0px" : "auto"
         setActive === "active" ? "0px" : `500px`
        );
        /*
        setScaleYState(
            setActive === "active" ? "0" : `1`
          );
*/
        setRotateState(
            setActive === "active" ? "0" : "-90deg"
            );

        
    }

   // scaleY={setScaleY}
   //height={setHeight}

    return (
        <AccordeonSection   rotate={setRotate}>
            <button onClick={ouvrirAccordeon}>
                <p>{props.titre}</p>
                <img src={Chevron} alt="chevronBlack"/>
            </button>
            <div style={{ maxHeight: `${setHeight}` }}>
                <p>
                    {props.content}
                </p> 
      
            </div>
        </AccordeonSection>
    )
}

export default Accordeon;