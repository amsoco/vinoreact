import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import FilAriane from "./FilAriane";
import MainLayout from "./styles/MainLayout.styled";

// le layout générique
const Layout = ({ children }) => {

    return (
        <>
            <NavBar />
                <MainLayout> 
                    <FilAriane/> 
                    {children}
                </MainLayout>
            <Footer />
        </>
    );
};

export default Layout;
