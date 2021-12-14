import React from "react";
import { BonttonModifierCountainer } from "./styles/BonttonModifierCountainer.styled";
import { useNavigate, useParams } from "react-router";
import Http from "../HttpClient";

const ButtonModifier = () => {
    const { bouteilleId, cellier } = useParams();
    const navigate = useNavigate();

    const effacer = async (bouteilleId) => {
        await Http.delete(`bouteilles/${bouteilleId}`);
        navigate("/cellier");
    };

    const modifier = () => navigate(`/${cellier}/modifier-bouteille/${bouteilleId}`);

    return (
        <BonttonModifierCountainer>
            <button onClick={modifier}>MODIFIER</button>
            <button onClick={() => effacer(bouteilleId)}>EFFACER</button>
        </BonttonModifierCountainer>
    );
};

export default ButtonModifier;
