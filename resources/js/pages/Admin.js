import React, { useState, useRef, useContext, createContext, useEffect, Children } from "react";
import { AdminMain, AdminAside, AdminNav, AdminSection, AdminAsidePetit } from "../components/styles/Admin.styled";
import LogoVino from "./../assets/svg/logoBlanc.svg";
import { useUser } from "../context/user";
// import AdminUsager from "../components/AdminUsager";
import AdminWikiVin from "../components/AdminWikiVin";
// import AdminAjoutUsager from "../components/AdminAjoutUsager";
import { Link } from "react-router-dom";


// création du contexte
const AdminContext = createContext();


const Admin = ({children}) => {
    const { user } = useUser();
    const { logout } = useUser();
    //const navigate = useNavigate();
    // const [setRoute, setRouteState] = useState("user");
    // const [setUsagerId, setUsagerIdState] = useState("");
    // const [setUsagerNom, setUsagerNomState] = useState("");
    // const [setUsagerCourriel, setUsagerCourrielState] = useState("");
    // const [setUsagerPrivilege, setUsagerPrivilegeState] = useState(1);

    const [setBouteille, setBouteilleState] = useState("");

    return (

        <AdminMain>
            <AdminAsidePetit>
                <h4>vino</h4>
                <Link to={`/admin/usager`}>Utilisateur</Link>
                <Link to={`/admin/wiki-vin`}>Wiki Vino</Link>
            </AdminAsidePetit>
            <AdminAside>
                <div>
                    <img src={LogoVino} alt="logo vino" />
                </div>
                <h4>Menu Admin</h4>
                <Link to={`/admin/usager`}>Utilisateur</Link>
                <Link to={`/admin/wiki-vin`}>Wiki Vino</Link>
            </AdminAside>
            <div>
                <AdminNav>
                    <h4>{user?.name}</h4>
                    <p onClick={() => logout()}>Logout</p>
                </AdminNav>
                    <AdminSection>
                        {children}
                    </AdminSection>
            </div> 
        </AdminMain>




    );
};

export default Admin;
