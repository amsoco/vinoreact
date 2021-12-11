import React from "react";
import { Input } from "./styles/Input.styled";



// composante footer
const AdminWikiVin = () => {
    return (
        <div>
            <div>
                <h4>Wiki Vino</h4>
            </div>
            <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/>
        </div>
    )

}


export default AdminWikiVin;