import { createContext, useContext, useState, useEffect } from "react";
import Http from "../HttpClient";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {
    
    // récupérer toutes les bouteilles d'un cellier par Id
    const getBouteillesCellier = (cellierId) => Http.get(`bouteilles/cell/${cellierId}`);

    return (
        <CellierContext.Provider value={{ getBouteillesCellier }}>
            {children}
        </CellierContext.Provider>
    );
};

export const useCellier = () => {
    return useContext(CellierContext);
};
