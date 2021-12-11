import React from "react";
import { FooterContainer } from "./styles/Footer.styled";


// composante footer
const AdminUsager = () => {
    return (
        <div>
            <div>
                <h4>Usager</h4>
            </div>
            <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/>
        </div>
    )

}


export default AdminUsager;