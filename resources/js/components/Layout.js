import React, { useState , useRef, Children } from "react";
import NavBar from "./NavBar";



const Layout = ({children}) => {

    return (<main>
        <NavBar/>
            {children}
        <Footer/>
    </main>)

    }


export default Layout;
