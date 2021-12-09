import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import CellierBouteille from "../components/CellierBouteille";
import Recherche from "../components/Recherche";
import BackUp from "../components/BackUp";
import Loader from "../components/Loader";
import Http from "../HttpClient";

const Cellier = () => {
    const [bouteilles, setBouteilles] = useState([]);
    const [nomCellier, setNomCellier] = useState("");
    const { getBouteillesCellier, loading } = useCellier();
    const { user } = useUser();
    const [setOpacity, setOpacityState] = useState("0");
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        let isMounted = true;
        const updateQte = localStorage.getItem("updateQte");
        const bouteilleId = localStorage.getItem("bouteilleId");

        if (updateQte) {
            updateBouteille(bouteilleId, updateQte);
        } else {
            getBouteilles();
        }
        return () => {
            isMounted = false;
        };
    }, []);

    const updateBouteille = async (bouteilleId, qte) => {
        // Cette request mettra à jour le nombre de bouteilles que l'utilisateur a défini auparavant dans Bouteille.js
        await Http.put(`bouteilles/editqte/${bouteilleId}`, {
            quantite: qte,
        }).then(() => {
            getBouteilles();
        });
        localStorage.removeItem("updateQte");
        localStorage.removeItem("bouteilleId");
    };
    const getBouteilles = async () => {
        const { id, nom_cellier } = JSON.parse(localStorage.getItem("cellier"));
        getBouteillesCellier(id).then(({ data }) => {
            setBouteilles(data);
            setNomCellier(nom_cellier);
        });
    };

    useEffect(() => {
        // listener sur windows dans le useEffect doit être supprimé dans la clean up fonction du useEffect
        // sans quoi le listener continue d'être actif même si tu quittes la page --> memory leak et crash de l'app
        window.addEventListener("scroll", handleScroll);
        () => window.removeEventListener("scroll", handleScroll);
    });

    //https://www.geeksforgeeks.org/how-to-create-scroll-indicator-using-reactjs/
    const handleScroll = (e) => {
        const Scrolled = document.documentElement.scrollTop;
        const MaxHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
        const ScrollPercent = (Scrolled / MaxHeight) * 100;
        setScroll(ScrollPercent);
        if (Scrolled > 20) {
            setOpacityState("100%");
        } else {
            setOpacityState("0");
        }
    };

    if (loading) return <Loader />;
    return (
        <Layout>
            <div>
                <h1>Ton Cellier</h1>
                <h3>{user?.name}</h3>
            </div>
            <Recherche />
            {bouteilles.length ? (
                bouteilles.map((bouteille) => (
                    <CellierBouteille
                        key={bouteille.id}
                        bouteille={bouteille}
                        cellier={nomCellier}
                    />
                ))
            ) : (
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Aucune bouteille dans ton cellier
                </p>
            )}

            <div
                style={{
                    opacity: `${setOpacity}`,
                    transition: "opacity 0.4s ease",
                }}
            >
                <BackUp />
            </div>
        </Layout>
    );
};

export default Cellier;
