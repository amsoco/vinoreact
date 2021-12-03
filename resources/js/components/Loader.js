import React from "react";
import BouteilleGris from "../assets/images/bouteilleGris.png";
import {
    Section,
    Bouteille,
    Image,
    AnimationVin,
} from "./styles/Loader.styled";

const Loader = () => {
    return (
        <Section>
            <Bouteille>
                <Image src={BouteilleGris} alt="bouteille vide" />
                <AnimationVin />
            </Bouteille>
        </Section>
    );
};

export default Loader;
