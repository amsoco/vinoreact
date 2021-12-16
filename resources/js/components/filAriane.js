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
            <Link to=" / celliers">
                <span>Accueil</span>
            </Link>

            {searchParams.cellier && (
                <Link to={` / ${searchParams.cellier}`}>
                    <span>/{searchParams.cellier}</span>
                </Link>
            )}

            <span>
                {searchParams.bouteilleId
                    ? " / "+searchParams.bouteilleId
                    :""}
            </span>

            {pathname.includes("mon-compte") && <span>/mon compte</span>}

            {pathname.includes("nouvelle-bouteille") && (
                <span>/ajouter bouteille</span>
            )}
        </FilDariane>
    );
};

export default filDariane;
