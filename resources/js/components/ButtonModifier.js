import React  from "react";
import { BonttonModifierCountainer} from "./styles/BonttonModifierCountainer.styled";
import { useNavigate, useParams } from "react-router";
import Http from "../HttpClient";


const ButtonModifier = () => {
    const { bouteilleId } = useParams();
    const navigate = useNavigate();

    const modifier = () => {console.log('modifier')}

    const effacer = async (bouteilleId) => {
        await Http.delete(`bouteilles/${bouteilleId}`);
        navigate('/cellier')
    };

    return (
        <BonttonModifierCountainer>
            <button onClick={modifier}>MODIFIER</button>
            <button onClick={() => effacer(bouteilleId)}>EFFACER</button>
            <div>
            <h3>Teste</h3>
            <h3>Teste</h3>
            <h3>Teste</h3>
            <h3>Teste</h3>
            <h3>Teste</h3>
            </div>

        </BonttonModifierCountainer>
    )
}

export default ButtonModifier;