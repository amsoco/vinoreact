import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MainLayout from "./styles/MainLayout.styled";

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            <MainLayout>
                {children}
            </MainLayout>
            <Footer />
        </>
    );
};

export default Layout;
