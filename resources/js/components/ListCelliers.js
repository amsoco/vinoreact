import React from "react";
import { useUser } from "../context/user";
import { ListCelliersCountainer } from "../components/styles/ListCelliers.styled.js";

const ListCelliers = () => {
    const { user } = useUser();

    return (
        <ListCelliersCountainer>
            <ul>
                {user?.celliers.map((cellier) => {
                    return <li key={cellier.id}>{cellier.nom_cellier}</li>;
                })}
            </ul>
        </ListCelliersCountainer>
    );
};

export default ListCelliers;
