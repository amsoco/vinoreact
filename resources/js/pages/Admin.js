import React from "react";
import { useNavigate } from "react-router";
import { Select } from "../components/styles/Input.styled";
import { AdminMain, AdminAside, AdminNav, AdminSection } from "../components/styles/Admin.styled";
import BouteilleBlackLogo from "../assets/images/bouteilleBlack.png";
import TacheHaut from "../assets/svg/tacheHaut.svg";
import TacheBas from "../assets/svg/tacheBas.svg";
import LogoVino from "./../assets/svg/logoBlanc.svg";
import { useUser } from "../context/user";
import { slugify } from "../helpers/slugify";



const Admin = () => {
    const { user } = useUser();
    const { logout } = useUser();
    const navigate = useNavigate();

    console.log(user)

    return (

        <AdminMain>
            <AdminAside>
                <div>
                    <img src={LogoVino} alt="logo vino" />
                </div>
                <h4>Menu Admin</h4>
                <p onClick={() => console.log('user')}>Utilisateur</p>
                <p onClick={() => console.log('wiki vin')}>Wiki Vin</p>
            </AdminAside>
            <div>
                <AdminNav>
                    
                        <h4>Bienvenue {user?.name}</h4>
                        <p onClick={() => logout()}>Logout</p>
                    
                </AdminNav>
                <AdminSection>
                    <div>
                        <h4>Usager</h4>
                    </div>
                </AdminSection>
            </div> 
        </AdminMain>

    );
};

export default Admin;
