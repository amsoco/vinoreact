import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import { useUser } from "../context/user";
import Layout from "../components/Layout";
import { useUser } from "../context/user";

const Cellier = () => {
    const [bouteilles, setBouteilles] = useState([]);
    const { getBouteillesCellier } = useCellier();
    const { user } = useUser();

    useEffect(() => {
        const { id } = JSON.parse(localStorage.getItem("cellier"));
        getBouteillesCellier(id).then(({ data }) => {
            setBouteilles(data)
        });
    }, []);

    return (
        <Layout>
            <div>
                <h1>Ton Cellier</h1>
                <h2>{user?.name}</h2>
            </div>

            {bouteilles?.map((bouteille) => (
                <div key={bouteille.id}>
                    <h3>{bouteille.nom}</h3>
                    <h3>{bouteille.millesime}</h3>
                    <img src={bouteille.url_img} alt={bouteille?.nom} style={{width: '50px'}} />
                    <p>{bouteille.pays}</p>
                    <p>{bouteille.format}</p>
                    <p>{bouteille.quantite}</p>
                </div>
            ))}
        </Layout>
    );
};

export default Cellier;
