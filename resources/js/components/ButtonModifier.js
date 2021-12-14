import React from "react";
import { BonttonModifierCountainer } from "./styles/BonttonModifierCountainer.styled";
import { useNavigate, useParams } from "react-router";
import { useCellier } from "../context/cellier";

const ButtonModifier = () => {
    const { bouteilleId, cellier } = useParams();
    const { supprimerBouteille } = useCellier();
    const navigate = useNavigate();

    return (
        <BonttonModifierCountainer>
            <button
                onClick={() =>
                    navigate(`/${cellier}/modifier-bouteille/${bouteilleId}`)
                }
            >
                MODIFIER
            </button>

            <button
                onClick={() => {
                    supprimerBouteille(bouteilleId);
                    navigate("/cellier");
                }}
            >
                EFFACER
            </button>
        </BonttonModifierCountainer>
    );
};

export default ButtonModifier;
