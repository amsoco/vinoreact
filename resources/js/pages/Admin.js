import React, { useState, useRef } from "react";
import { useNavigate } from "react-router";
import { AdminMain, AdminAside, AdminNav, AdminSection } from "../components/styles/Admin.styled";
import LogoVino from "./../assets/svg/logoBlanc.svg";
import { useUser } from "../context/user";
import AdminUsager from "../components/AdminUsager";
import AdminWikiVin from "../components/AdminWikiVin";



const Admin = () => {
    const { user } = useUser();
    const { logout } = useUser();
    const navigate = useNavigate();
    const [setRoute, setRouteState] = useState("user");

    console.log(user)

    const RouteAdmin = (route) => {
        setRouteState(route)
    }

    return (

        <AdminMain>
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
                        <h4>Bienvenue {user?.name}</h4>
                        <p onClick={() => logout()}>Logout</p>
                </AdminNav>
                <AdminSection>
                {(() => {
                        switch (setRoute) {
                            case "user":   return <AdminUsager/>;
                            case "wikiVin": return <AdminWikiVin/>;
                      }
                 })()}
                </AdminSection>
            </div> 
        </AdminMain>

    );
};

export default Admin;
