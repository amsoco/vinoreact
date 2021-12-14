import React, { useEffect, useState, useRef, useCallback } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import CellierBouteille from "../components/CellierBouteille";
import Recherche from "../components/Recherche";
import BackUp from "../components/BackUp";
import CircleLoader from "../components/CircleLoader";

const Cellier = () => {
    const { getBouteillesCellier, loading, updateQty } = useCellier();
    const { user } = useUser();
    const [setOpacity, setOpacityState] = useState("0");
    const [pageNum, setPageNum] = useState(1);
    const [bouteilles, setBouteilles] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const { id, nom_cellier } = JSON.parse(localStorage.getItem("cellier"));
    const [nomCellier] = useState(nom_cellier);
    const [search, setSearch] = useState("");
    const [scroll, setScroll] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // https://stackoverflow.com/questions/53949393/cant-perform-a-react-state-update-on-an-unmounted-component
    useEffect(() => {
        const updateQte = localStorage.getItem("updateQte");
        const bouteilleId = localStorage.getItem("bouteilleId");
        if (updateQte && !isNaN(updateQte)) {
            updateBouteille(bouteilleId, updateQte);
        }
        getBouteillesCellier();
    }, []);

    const updateBouteille = async (bouteilleId, qte) => {
        // Cette request mettra à jour le nombre de bouteilles que l'utilisateur a défini auparavant dans Bouteille.js
        await updateQty(bouteilleId, qte);
        getBouteilles();
        localStorage.removeItem("updateQte");
        localStorage.removeItem("bouteilleId");
    };

    // https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
    useEffect(() => {
        setIsLoading(true);
        getBouteillesCellier(id, pageNum).then((res) => {
            setBouteilles((prev) => {
                return [
                    ...new Set([
                        ...prev,
                        ...res.data.data.map((d) => (
                            <CellierBouteille
                                key={d.id}
                                bouteille={d}
                                cellier={nomCellier}
                            />
                        )),
                    ]),
                ];
            });
            setHasMore(res.data.data.length > 0);
            setIsLoading(false);
        });
    }, [id, pageNum]);

    const observer = useRef();
    const derniereBouteilleRef = useCallback(
        (node) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNum((prev) => prev + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasMore]
    );

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
        if (Scrolled > 20) {
            setOpacityState("100%");
        } else {
            setOpacityState("0");
        }
    };

    return (
        <Layout>
            {isLoading && bouteilles <= 0 ? (
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

                    {!bouteilles.length && (
                        <p
                            style={{
                                textAlign: "center",
                                marginTop: "30px",
                            }}
                        >
                            Aucune bouteille dans ton cellier
                        </p>
                    )}
                    {bouteilles.map((bouteille, i) => {
                        if (bouteilles.length === i + 1) {
                            return (
                                <div key={i} ref={derniereBouteilleRef}>
                                    {bouteille}
                                </div>
                            );
                        } else {
                            return <div key={i}>{bouteille}</div>;
                        }
                    })}
                    <div>{isLoading && <CircleLoader />}</div>
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
