import React from "react";
import { CellierBouteilleSection } from "./styles/CellierBouteilleSection.styled";
import DummyBouteille from "../assets/svg/dummyBouteille.svg";


const Layout = ({  }) => {
    return (
            <CellierBouteilleSection>
                <div>
                    <h3>Natale Verga I Balzi BIO Sicilia</h3>
                    <p>2018</p>
                </div>
                <div>
                    <img src={DummyBouteille} alt="dummy bouteille" />
                    <div>
                        <p>Italy , SICILE</p>
                        <p>750 ml</p>
                        <p>16,85 $</p>
                        <p>12</p>
                    </div>
                </div>
            </CellierBouteilleSection>
    
    );
};

export default Layout;
