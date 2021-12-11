import React from "react";
import { Input } from "./styles/Input.styled";



// composante Admin Wiki Vin
const AdminWikiVin = () => {
    return (
        <div>
            <div>
                <h4>Wiki Vino</h4>
            </div>
            <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/>
            <ul>
                <li></li>
            </ul>
        </div>
    )

}
export default AdminWikiVin;