import React  from "react";
import { BonttonModifierCountainer} from "./styles/BonttonModifierCountainer.styled";


const ButtonModifier = () => {

//onClick={retournerHaut}

    return (
        <BonttonModifierCountainer>
            <button>MODIFIER</button>
            <button>EFFACER</button>
        </BonttonModifierCountainer>
    )
}

export default ButtonModifier;