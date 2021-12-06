import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Recherche from "../components/Recherche";
import { useCellier } from "../context/cellier";
import useDebounce from "../hooks/useDebounce";

const AjouterBouteille = () => {
    const { searchWiki } = useCellier();
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearch = useDebounce(search, 500);

    useEffect(
        () => {
            if (debouncedSearch) {
                setIsSearching(true);
                searchWiki(debouncedSearch).then((results) => {
                    setIsSearching(false);
                    setResults(results);
                    console.log("results", results);
                });
            } else {
                setResults([]);
                setIsSearching(false);
            }
        },
        [debouncedSearch] // Only call effect if debounced search term changes
    );

    return (
        <Layout>
            <Recherche
                placeholder="Rechercher une bouteille dans le wiki"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Layout>
    );
};

export default AjouterBouteille;
