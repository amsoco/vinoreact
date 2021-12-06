import React from "react";
import { RechercheInput } from "./styles/Input.styled";

const Recherche = ({ value, onChange }) => {

    return (
        <RechercheInput
            onChange={onChange}
            value={value}
        />
    );
};

export default Recherche;
