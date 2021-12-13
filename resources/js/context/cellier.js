import { createContext, useContext } from "react";
import axios from "axios";
import Http from "../HttpClient";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {
    // const [{ loading }, dispatch] = useReducer(uiReducer, { loading: true });

    // récupérer toutes les bouteilles d'un cellier par Id
    const getBouteillesCellier = async (cellierId, pageNum) => {
        const bouteilles = await Http.get(
            `bouteilles/cell/${cellierId}/?page=${pageNum}`
        );

        return bouteilles;
    };

    // récupérer une bouteille par id
    const getBouteille = async (bouteilleId) => {
        const bouteille = await Http.get(`bouteilles/${bouteilleId}`);
        return bouteille;
    };

    // rechercher dans le wiki
    const searchWiki = (search) => Http.get(`search/${search}`);

    // ajouter une bouteille au cellier

    const addBouteille = (bouteille) =>
        Http.post("bouteilles/create", bouteille);

    // récupérer les catégories
    const getCategories = () => Http.get("categories");

    // upload image
    const uploadImage = async (img) => {
        const formData = new FormData();
        formData.append("file", img);
        formData.append("upload_preset", "knxwwgoa");

        return axios.post(
            "https://api.cloudinary.com/v1_1/vino-project/image/upload",
            formData
        );
    };

    // mis a jour de la quantité
    const updateQty = (bouteilleId, quantite) =>
        Http.put(`bouteilles/editField/${bouteilleId}`, { quantite });

    return (
        <CellierContext.Provider
            value={{
                getBouteillesCellier,
                getBouteille,
                addBouteille,
                searchWiki,
                uploadImage,
                getCategories,
                updateQty,
            }}
        >
            {children}
        </CellierContext.Provider>
    );
};

export const useCellier = () => {
    return useContext(CellierContext);
};
