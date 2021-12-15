import React, { useState, useRef, useContext, createContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AdminMain, AdminAside, AdminNav, AdminSection, AdminAsidePetit } from "../components/styles/Admin.styled";
import LogoVino from "./../assets/svg/logoBlanc.svg";
import { useUser } from "../context/user";
import AdminUsager from "../components/AdminUsager";
import AdminWikiVin from "../components/AdminWikiVin";
import AdminAjoutUsager from "../components/AdminAjoutUsager";


// création du contexte
const AdminContext = createContext();


const Admin = () => {
    const { user } = useUser();
    const { logout } = useUser();
    //const navigate = useNavigate();
    const [setRoute, setRouteState] = useState("user");
    const [setUsagerId, setUsagerIdState] = useState("");
    const [setUsagerNom, setUsagerNomState] = useState("");
    const [setUsagerCourriel, setUsagerCourrielState] = useState("");
    const [setUsagerPrivilege, setUsagerPrivilegeState] = useState(1);

    const [setBouteille, setBouteilleState] = useState("");


    const RouteAdmin = (route, id, nom, email, privilege) => {
        setRouteState(route)
        setUsagerIdState(id)
        setUsagerNomState(nom)
        setUsagerCourrielState(email)
        setUsagerPrivilegeState(privilege)
    }

    const RouteAdminWiki = (route, bouteille) => {
        setRouteState(route)
        setBouteille(bouteille)
        
    }




    return (

        <AdminMain>
            <AdminAsidePetit>
                <h4>vino</h4>
                <p onClick={() => RouteAdmin('user')}>Utilisateur</p>
                <p onClick={() => RouteAdmin('wikiVin')}>Wiki Vin</p>
            </AdminAsidePetit>
            <AdminAside>
                <div>
                    <img src={LogoVino} alt="logo vino" />
                </div>
                <h4>Menu Admin</h4>
                <p onClick={() => RouteAdmin('user')}>Utilisateur</p>
                <p onClick={() => RouteAdmin('wikiVin')}>Wiki Vin</p>
            </AdminAside>
            <div>
                <AdminNav>
                    <h4>{user?.name}</h4>
                    <p onClick={() => logout()}>Logout</p>
                </AdminNav>
                <AdminContext.Provider value={{RouteAdmin}} >
                    <AdminSection >
                    
                    {(() => {

                        switch (setRoute) {
                            case "user":   return <AdminUsager/>;
                            case "wikiVin": return <AdminWikiVin/>;
                            case "AjoutUsager" : return <AdminAjoutUsager 
                                id={setUsagerId} 
                                nom={setUsagerNom} 
                                email={setUsagerCourriel} 
                                privilege={setUsagerPrivilege} 
                            />;
                            case "AjoutBouteilleWiki" : return <AdminAjoutBouteille 
                            bouteille={result} 
                            
                        />;
                        }

                    })()}
                    </AdminSection>
                </AdminContext.Provider>
            </div> 
        </AdminMain>




    );
};

export default Admin;
export const useAdmin = () => {
    return useContext(AdminContext);
};