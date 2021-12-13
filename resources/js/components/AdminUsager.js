import React, { useEffect, useState } from "react";
import { useUser } from "../context/user";


// Admin Usager
const AdminUsager = () => {
    const { user } = useUser();
    const [usagers, setUsagers] = useState([]);

    const { getUsagers } = useUser();
    useEffect(() => {
        getUsagersAdmin();
    }, []);

    const getUsagersAdmin = async () => {
        getUsagers().then(({ data }) => {
            setUsagers(data);
            console.log(data)
        });
    };




    return (
        <div>
            <div>
                <h4>Usager</h4>
            </div>
            <input type="text" id="rechercheAdmin" name="rechercher" placeholder='Recherche'/>
            <ul>
            {usagers.length ? (
                usagers.map((usager) => (
                   <li> <p> {usager.name} | {usager.email} </p> </li>
                ))
            ) : (
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Aucun usager
                </p>
            )}
            </ul>
        </div>
    )

}


export default AdminUsager;