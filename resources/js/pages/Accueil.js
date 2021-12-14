import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Select } from "../components/styles/Input.styled";
import { AccueilMain } from "../components/styles/Accueil.styled";
import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
import TacheHaut from "../assets/svg/tacheHaut.svg";
import TacheBas from "../assets/svg/tacheBas.svg";
import LogoVino from "../assets/svg/logo.svg";
import { useUser } from "../context/user";
import { slugify } from "../helpers/slugify";

const Accueil = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    const onSelectChange = (e) => {
        const selectedCellier = user.celliers.find(
            (cellier) => cellier.id == e.target.value
        );
        // on sauve le cellier sélectionné dans localstorage
        // on va ensuite fetch les bouteilles avec l'id du cellier venant de localStorage
        localStorage.setItem("cellier", JSON.stringify(selectedCellier));
        const slug = slugify(selectedCellier.nom_cellier);
        navigate(`/${slug}`);
    };

    useEffect(() => {
        if (user?.privilege_id === 2) navigate("/admin");
    }, []);

    return (
        <AccueilMain>
            <img src={TacheHaut} alt="Tache Rouge haut" />
            <h2>Bienvenue dans ton cellier, {user?.name} </h2>
            <img src={BouteilleBlackLogo} alt="Logo Bouteille vino" />
            <img src={LogoVino} alt="Logo Vino" />
            <Select name="cellier" onChange={onSelectChange}>
                <option value="">Sélectionnez un cellier</option>
                {user?.celliers.map((cellier) => {
                    return (
                        <option key={cellier.id} value={cellier.id}>
                            {cellier.nom_cellier}
                        </option>
                    );
                })}
            </Select>
            <img src={TacheBas} alt="Tache Rouge bas" />
        </AccueilMain>
    );
};

export default Accueil;
