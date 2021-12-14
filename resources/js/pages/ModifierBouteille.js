import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useCellier } from "../context/cellier";
import ModifierBouteilleForm from "../components/Forms/AjouterBouteille";


const ModifierBouteille = () => {
    const { bouteilleId } = useParams();
    const { getBouteille } = useCellier();
    const [bouteille, setBouteille] = useState();

    useEffect(() => {
        getBouteille(bouteilleId).then(({ data }) => {
            setBouteille({
                ...data.bouteille,
                categorie: data.categorie,
            });
        });
    }, []);

    return (
        <Layout>
            {bouteille && <ModifierBouteilleForm bouteille={bouteille} />}
        </Layout>
    );
};

export default ModifierBouteille;
