import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import CellierBouteille from "../components/CellierBouteille";
import Recherche from "../components/Recherche";
import BackUp from "../components/BackUp";

const Cellier = () => {
    const [bouteilles, setBouteilles] = useState([]);
    const [nomCellier, setNomCellier] = useState("");
    const { getBouteillesCellier } = useCellier();
    const { user } = useUser();

    useEffect(() => {
        const { id, nom_cellier } = JSON.parse(localStorage.getItem("cellier"));
        getBouteillesCellier(id).then(({ data }) => {
            setBouteilles(data);
            console.log(data[0]["id"])
            setNomCellier(nom_cellier);
        });
    }, []);

    return (
        <Layout>
            <div>
                <h1>Ton Cellier</h1>
                <h3>{user?.name}</h3>
            </div>

            <Recherche />
            {bouteilles ? (
                bouteilles.map((bouteille) => (
                    <CellierBouteille
                        key={bouteille.id}
                        bouteille={bouteille}
                        cellier={nomCellier}
                    />
                ))
            ) : (
                <p>Aucune bouteille dans ton cellier</p>
            )}
            <BackUp/>
        </Layout>
    );
};

export default Cellier;
