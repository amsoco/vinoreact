import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import CellierBouteille from "../components/CellierBouteille";

const Cellier = () => {
    const [bouteilles, setBouteilles] = useState([]);
    const [nomCellier, setNomCellier] = useState("");
    const { getBouteillesCellier } = useCellier();
    const { user } = useUser();

    useEffect(() => {
        const { id, nom_cellier } = JSON.parse(localStorage.getItem("cellier"));
        getBouteillesCellier(id).then(({ data }) => {
            setBouteilles(data);
            setNomCellier(nom_cellier);
        });
    }, []);

    return (
        <Layout>
            <div>
                <h1>Ton Cellier</h1>
                <h2>{user?.name}</h2>
            </div>

            

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
        </Layout>
    );
};

export default Cellier;
