import React from "react";
import { LoaderSection } from "../components/styles/Loader.js";
import BouteilleGris from "../assets/images/bouteilleGris.png";

const LoaderComp = () => {
    return (
        <LoaderSection>
            <div>
                <div className="wine-bottle"></div>
                <img src={BouteilleGris} alt="bouteille vide" />
            </div>
        </LoaderSection>
    );
};

export default LoaderComp;
