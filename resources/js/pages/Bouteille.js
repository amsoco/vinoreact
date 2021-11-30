import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BouteilleSection } from "../components/styles/Bouteille.styled";
import { Button } from "../components/styles/Button.styled";
import Layout from "../components/Layout";
import Accordeon from "../components/Accordeon";
import BouteillePhoto from "../assets/images/bouteille.jpg";
import { useCellier } from "../context/cellier";

const Bouteille = () => {
    const [bouteille, setBouteille] = useState({});
    const { getBouteille } = useCellier();
    const { cellier, bouteilleId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBouteille(bouteilleId).then(({ data }) => {
            setBouteille(data);
        });
    }, []);

    if (!bouteille) navigate(`/${cellier}`);

    return (
        <Layout>
            <BouteilleSection>
                <img
                    src={bouteille.url_img ? bouteille.url_img : BouteillePhoto}
                    alt="logo"
                />
                <h1>{bouteille.nom}</h1>
                <h3>Quantité {bouteille.quantite}</h3>

                <div>
                    <Accordeon
                        titre="Description"
                        content={bouteille.description}
                    ></Accordeon>
                    <Accordeon
                        titre="Notes"
                        content={bouteille.note}
                    ></Accordeon>
                    <Accordeon
                        titre="Modification"
                        content="Vin mousseu bon"
                    ></Accordeon>
                </div>
                <Button
                    bg="#fff"
                    color="#303031"
                    colorHover="#fff"
                    bgHover="#303031"
                >
                    AJOUTER
                </Button>
                <Button bg="#303031" color="#fff">
                    BOIRE
                </Button>
            </BouteilleSection>
        </Layout>
    );
};

export default Bouteille;
