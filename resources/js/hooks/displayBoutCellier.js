import React, { useEffect, useState } from "react";
import { useCellier } from "../context/cellier";
import CellierBouteille from "../components/CellierBouteille";
import useDebounce from "../hooks/useDebounce";

const displayBoutCellier = (search, pageNum) => {
    const { getBouteillesCellier, searchCellier } = useCellier();
    const [bouteilles, setBouteilles] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const { id, nom_cellier } = JSON.parse(localStorage.getItem("cellier"));
    const [nomCellier] = useState(nom_cellier);
    const [isLoading, setIsLoading] = useState(true);
    const debouncedSearch = useDebounce(search, 1000);
    useEffect(() => {
        setBouteilles([]);
    }, [debouncedSearch]);
    // https://medium.com/suyeonme/react-how-to-implement-an-infinite-scroll-749003e9896a
    useEffect(() => {
        if (debouncedSearch.length > 0) {
            searchCellier(id, debouncedSearch, pageNum).then((res) => {
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
            });
            setHasMore(false);
        } else if (debouncedSearch.length <= 0) {
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
        }
    }, [id, debouncedSearch, pageNum]);

    return { isLoading, bouteilles, hasMore };
};

export default displayBoutCellier;
