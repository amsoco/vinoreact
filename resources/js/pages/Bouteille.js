import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BouteilleSection } from "../components/styles/Bouteille.styled";
import { Button } from "../components/styles/Button.styled";
import Layout from "../components/Layout";
import Accordeon from "../components/Accordeon";
import BouteillePhoto from "../assets/images/bouteille.jpg";
import { useCellier } from "../context/cellier";
import Loader from "../components/Loader";

const Bouteille = () => {
    
    const [bouteille, setBouteille] = useState({});
    const { getBouteille, loading } = useCellier();
    const { cellier, bouteilleId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBouteille(bouteilleId).then(({ data }) => {
            setBouteille(data);
        });
    }, []);

    if (!bouteille) navigate(`/${cellier}`);

    if (loading) return <Loader />;
    return (
        <Layout>
            <BouteilleSection>
                <img
                    src={bouteille.url_img ? bouteille.url_img : BouteillePhoto}
                    alt="logo"
                />
                <h2>{bouteille.nom}</h2>
                <h3>Quantité {bouteille.quantite}</h3>
                <section>
                    <div>
                        <p>Pays</p>
                        <p>Prix</p>
                        <p>Cépage</p>
                        <p>Millesime</p>
                    </div>
                    <div>
                        <p>{bouteille.pays}</p>
                        <p>{bouteille.prix_achat} $</p>
                        <p>{bouteille.cepage ? bouteille.cepage : 'Cépage inconnu'}</p>
                        <p>{bouteille.millesime ? bouteille.millesime : 'Inconnu'}</p>
                </div>
                </section>
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
