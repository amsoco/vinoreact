import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { BouteilleSection } from "../components/styles/Bouteille.styled";
import { Button } from "../components/styles/Button.styled";
import Layout from "../components/Layout";
import Accordeon from "../components/Accordeon";
import ButtonModifier from "../components/ButtonModifier";
import Notes from "../components/Notes";
import { useCellier } from "../context/cellier";
import CircleLoader from "../components/CircleLoader";

const Bouteille = () => {
    const [bouteille, setBouteille] = useState({});
    const [categorie, setCategorie] = useState("");
    const { getBouteille, loading } = useCellier();
    const { cellier, bouteilleId } = useParams();
    const navigate = useNavigate();
    const [counter, setCounter] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isSubscribed = true;
        setIsLoading(true);
        getBouteille(bouteilleId).then(({ data }) => {
            const { bouteille, categorie } = data;
            setBouteille(bouteille);
            setCategorie(categorie);
            setCounter(bouteille.quantite);
            localStorage.setItem("bouteilleId", bouteilleId);
        });

        return () => (isSubscribed = false);
    }, []);

    if (!bouteille) navigate(`/${cellier}`);

    if (loading) return <Loader />;
    return (
        <Layout>
            <BouteilleSection>
                {isLoading && (
                    <div
                        style={{
                            minHeight: "80vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CircleLoader />
                    </div>
                )}

                <img
                    src={bouteille?.url_img}
                    style={{ display: isLoading ? "none" : "block" }}
                    onLoad={() => setIsLoading(false)}
                    alt={bouteille?.nom}
                />

                <h2>{bouteille.nom}</h2>
                <h3>Quantité {counter}</h3>
                <section>
                    <div>
                        <p>Pays</p>
                        <p>Prix</p>
                        <p>Type</p>
                        <p>Millesime</p>
                    </div>
                    <div>
                        <p>{bouteille.pays}</p>
                        <p>{bouteille.prix_achat} $</p>
                        <p>{categorie ? categorie : "Type inconnu"}</p>
                        <p>
                            {bouteille.millesime
                                ? bouteille.millesime
                                : "Inconnu"}
                        </p>
                    </div>
                </section>
                <div>
                    <Accordeon
                        titre="Description"
                        content={bouteille.description}
                    ></Accordeon>
                    <Accordeon
                        titre="Notes"
                        // content={bouteille.note, <Select />}
                        content={
                            <Notes
                                note={bouteille.note}
                                bouteille={bouteille.id}
                            />
                        }
                    ></Accordeon>
                    <Accordeon
                        titre="Modification"
                        content={<ButtonModifier />}
                    ></Accordeon>
                </div>
                <Button
                    bg="#fff"
                    color="#303031"
                    colorHover="#fff"
                    bgHover="#303031"
                    onClick={() => {
                        setCounter(counter + 1);
                        localStorage.setItem("updateQte", counter + 1);
                    }}
                >
                    AJOUTER
                </Button>
                <Button
                    bg="#303031"
                    color="#fff"
                    onClick={() => {
                        counter > 0 && setCounter(counter - 1);
                        counter >= 1 &&
                            localStorage.setItem("updateQte", counter - 1);
                    }}
                >
                    BOIRE
                </Button>
            </BouteilleSection>
        </Layout>
    );
};

export default Bouteille;
