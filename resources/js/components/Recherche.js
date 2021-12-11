import React from "react";
import { RechercheInput } from "./styles/Input.styled";

const Recherche = ({ value, onChange, placeholder }) => {

    return (
        <RechercheInput
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
};

export default Recherche;
