import React from "react";
import { Link } from "react-router-dom";
import { CellierBouteilleSection } from "./styles/CellierBouteilleSection.styled";
import DummyBouteille from "../assets/svg/dummyBouteille.svg";
import { slugify } from "../helpers/slugify";

const CellierBouteille = ({ bouteille, cellier }) => {
    const { id, nom, millesime, url_img, pays, format, prix_achat, quantite } =
        bouteille;

    return (
        <CellierBouteilleSection>
            <div>
                <h3>{nom}</h3>
                <p>{millesime ? millesime : "Inconnu"}</p>
            </div>
            <div>
                <Link to={`/${slugify(cellier)}/${id}`}>
                    <img src={url_img ? url_img : DummyBouteille} alt={nom} />
                </Link>
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
