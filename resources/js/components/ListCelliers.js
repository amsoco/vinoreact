import React from "react";
import { useUser } from "../context/user";
import { slugify } from "../helpers/slugify";
import { useNavigate } from "react-router";
import { ListCelliersCountainer } from "../components/styles/ListCelliers.styled.js";

const ListCelliers = () => {
    const { user } = useUser();
    const navigate = useNavigate();
    const celierLink = (e) => {
        const selectedCellier = user.celliers.find(
            (cellier) => cellier.id == e.target.id
        );
        // on sauve le cellier sélectionné dans localstorage
        // on va ensuite fetch les bouteilles avec l'id du cellier venant de localStorage
        localStorage.setItem("cellier", JSON.stringify(selectedCellier));
        const slug = slugify(selectedCellier.nom_cellier);
        navigate(`/${slug}`);
    };

    return (
        <ListCelliersCountainer>
            <ul>
                {user?.celliers.map((cellier) => {
                    return (
                        <li
                            key={cellier.id}
                            id={cellier.id}
                            onClick={celierLink}
                        >
                            {cellier.nom_cellier}
                        </li>
                    );
                })}
            </ul>
        </ListCelliersCountainer>
    );
};

export default ListCelliers;
