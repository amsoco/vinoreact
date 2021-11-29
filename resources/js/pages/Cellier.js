import React from "react";
import Layout from "../components/Layout";
import { useUser } from "../context/user";

const Cellier = () => {
    const { user } = useUser();
    console.log(user);

    return <Layout>TOUTES LES BOUTEILLES D'UN CELLIER</Layout>;
};

export default Cellier;
