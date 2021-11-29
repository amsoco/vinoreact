import React from "react";
import { CellierBouteilleSection } from "./styles/CellierBouteilleSection.styled";
import DummyBouteille from "../assets/svg/dummyBouteille.svg";

const CellierBouteille = ({ nom, pays, url_img, format, prix_achat, millesime, quantite }) => {
    return (
        <CellierBouteilleSection>
            <div>
                <h3>{nom}</h3>
                <p>{millesime}</p>
            </div>
            <div>
                <img
                    src={url_img ? url_img : DummyBouteille}
                    alt={nom}
                />
                <div>
                    <p>{pays}</p>
                    <p>{format}</p>
                    <p>{prix_achat}$</p>
                    <p>{quantite}</p>
                </div>
            </div>
        </CellierBouteilleSection>
    );
};

export default CellierBouteille;
