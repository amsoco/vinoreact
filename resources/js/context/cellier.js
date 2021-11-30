import { createContext, useContext, useState, useEffect } from "react";
import Http from "../HttpClient";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {
    // récupérer toutes les bouteilles d'un cellier par Id
    const getBouteillesCellier = (cellierId) =>
        Http.get(`bouteilles/cell/${cellierId}`);

    // récupérer une bouteille par id
    const getBouteille = (bouteilleId) => Http.get(`bouteilles/${bouteilleId}`);

    return (
        <CellierContext.Provider value={{ getBouteillesCellier, getBouteille }}>
            {children}
        </CellierContext.Provider>
    );
};

export const useCellier = () => {
    return useContext(CellierContext);
};
