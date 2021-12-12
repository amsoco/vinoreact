import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import CellierBouteille from "../components/CellierBouteille";
import Recherche from "../components/Recherche";
import BackUp from "../components/BackUp";
import CircleLoader from "../components/CircleLoader";

const Cellier = () => {
    const [bouteilles, setBouteilles] = useState([]);
    const [nomCellier, setNomCellier] = useState("");
    const [search, setSearch] = useState("");
    const { getBouteillesCellier, loading } = useCellier();
    const { user } = useUser();
    const [setOpacity, setOpacityState] = useState("0");
    const [scroll, setScroll] = useState(0);
    const [contentLoading, setContentLoading] = useState(true);

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    // memory leak et crash de l'app
    useEffect(() => {
        const updateQte = localStorage.getItem("updateQte");
        const bouteilleId = localStorage.getItem("bouteilleId");
        if (updateQte && !isNaN(updateQte)) {
            updateBouteille(bouteilleId, updateQte);
        } else {
            getBouteilles();
        }
    }, []);

    const updateBouteille = async (bouteilleId, qte) => {
        // Cette request mettra à jour le nombre de bouteilles que l'utilisateur a défini auparavant dans Bouteille.js
        await Http.put(`bouteilles/editField/${bouteilleId}`, {
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
            setContentLoading(false);
        });
        localStorage.removeItem("updateQte");
        localStorage.removeItem("bouteilleId");
    };

    useEffect(() => {
        // https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react
        // listener sur windows dans le useEffect doit être supprimé dans la clean up fonction du useEffect
        // sans quoi le listener continue d'être actif même si tu quittes la page --> memory leak et crash de l'app
        window.addEventListener("scroll", handleScroll);
        return function cleanupListener() {
            window.removeEventListener("scroll", handleScroll);
        };
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
            {contentLoading ? (
                <div
                    style={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <CircleLoader />
                </div>
            ) : (
                <>
                    <div>
                        <h1>Ton Cellier</h1>
                        <h3>{user?.name}</h3>
                    </div>
                    <Recherche
                        placeholder="Rechercher dans mon cellier"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    {bouteilles.length ? (
                        bouteilles.map((bouteille) => (
                            <CellierBouteille
                                key={bouteille.id}
                                bouteille={bouteille}
                                cellier={nomCellier}
                            />
                        ))
                    ) : (
                        <p
                            style={{
                                textAlign: "center",
                                marginTop: "30px",
                                display: contentLoading ? "none" : "block",
                            }}
                        >
                            Aucune bouteille dans ton cellier
                        </p>
                    )}
                </>
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
