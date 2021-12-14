import React from "react";
import { FilDariane } from "./styles/FilDariane.styled";
import { useParams, Link, useLocation } from "react-router-dom";

// aller chercher l'info pour de fil d'ariane
const filDariane = ({ children }) => {
    const searchParams = useParams();
    const { pathname } = useLocation();

    // composant fil d'ariane aka navigation aka breadcrumbs
    return (
        <FilDariane>
            <Link to="/celliers">
                <span>Accueil</span>
            </Link>
            <span>/</span>
            
            
            {pathname.includes("mon-compte") && (
                    <span>mon compte</span>
            )}


            {/* Accueil / cellier-tito */}
            {searchParams.cellier && (
                <>
                    <span>/</span>
                </>
            )}
            {pathname.includes("nouvelle-bouteille") && (
                <span>ajouter bouteille</span>
            )}


            {/* Accueil / cellier-tito / 1 */}
            {searchParams.bouteilleId && (
                <span>{searchParams.bouteilleId || ""}</span>
            )}
        </FilDariane>
    );
};

export default filDariane;
