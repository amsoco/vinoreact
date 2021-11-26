import { createContext, useContext, useState, useEffect } from "react";
import Http from "../HttpClient";

// création du contexte Cellier
const CellierContext = createContext();

// fonction pour rendre disponible le cellier dans l'app tree
export const CellierProvider = ({ children }) => {

};

export const useCellier = () => {
    return useContext(CellierContext);
};
