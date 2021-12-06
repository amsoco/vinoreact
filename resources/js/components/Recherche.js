import React from "react";
import { RechercheInput } from "./styles/Input.styled";

const Recherche = ({ placeholder, value, onChange }) => {

    return (
        <RechercheInput
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
};

export default Recherche;
