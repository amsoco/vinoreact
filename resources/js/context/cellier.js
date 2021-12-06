import { createContext, useContext, useReducer } from "react";
import Http from "../HttpClient";
import uiReducer from "../reducers/uiReducer";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {
    const [{ loading }, dispatch] = useReducer(uiReducer, { loading: true });

    // récupérer toutes les bouteilles d'un cellier par Id
    const getBouteillesCellier = async (cellierId) => {
        dispatch({ type: "LOADING" });
        const bouteilles = await Http.get(`bouteilles/cell/${cellierId}`);
        setTimeout(() => dispatch({ type: "LOADED" }), 500);
        return bouteilles;
    };

    // récupérer une bouteille par id
    const getBouteille = async (bouteilleId) => {
        dispatch({ type: "LOADING" });
        const bouteille = await Http.get(`bouteilles/${bouteilleId}`);
        setTimeout(() => dispatch({ type: "LOADED" }), 500);
        return bouteille;
    };

    const searchWiki = (search) => Http.get(`search/${search}`);

    return (
        <CellierContext.Provider
            value={{ getBouteillesCellier, getBouteille, searchWiki, loading }}
        >
            {children}
        </CellierContext.Provider>
    );
};

export const useCellier = () => {
    return useContext(CellierContext);
};
