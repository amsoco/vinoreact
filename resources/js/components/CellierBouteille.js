import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CellierBouteilleSection } from "./styles/CellierBouteilleSection.styled";
import { slugify } from "../helpers/slugify";
import CircleLoader from "./CircleLoader";

const CellierBouteille = ({ bouteille, cellier }) => {
    const [isLoading, setIsLoading] = useState(true);
    const { id, nom, millesime, url_img, pays, format, prix_achat, quantite } =
        bouteille;
    // la section cellier pour chacune des bouteille
    return (
        <CellierBouteilleSection>
            {quantite > 0 && (
                <Link to={`/${slugify(cellier)}/${id}`}>
                    <div>
                        <h3>{nom}</h3>
                        <p>{millesime ? millesime : "Inconnu"}</p>
                    </div>
                    <div>
                        {isLoading && (
                            <div
                                style={{
                                    minHeight: "150px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <CircleLoader />
                            </div>
                        )}
                        <img
                            src={url_img}
                            style={{ display: isLoading ? "none" : "block" }}
                            onLoad={() => setIsLoading(false)}              
                            alt={nom}
                        />
                        <div>
                            <p>{pays}</p>
                            <p>{format}</p>
                            <p>{prix_achat}$</p>
                            <p>{quantite}</p>
                        </div>
                    </div>
                </Link>
            )}
        </CellierBouteilleSection>
    );
};

export default CellierBouteille;
