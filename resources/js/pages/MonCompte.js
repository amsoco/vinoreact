import React from "react";
import { MonCompteCountainer } from "../components/styles/MonCompte.styled.js";
import Accordeon from "../components/Accordeon";
import { Link, useParams } from "react-router-dom";
import ListCelliers from "../components/ListCelliers";
import { useUser } from "../context/user";
import { Button } from "../components/styles/Button.styled";
import AddCellierForm from "../components/Forms/AjoutCellierForm";
import Holder from "../components/Holder.js";
import { AddCelLayout } from "../components/styles/AddCelLayout.styled";
import NavBar from "../components/NavBar.js";
import FilAriane from "../components/FilAriane.js";

const MonCompte = () => {
    const { user } = useUser();
    return (
        <>
            <NavBar />
            <MonCompteCountainer>
                <FilAriane />
                <h4>Mon compte</h4>
                <Holder value={user?.name} />

                <Holder value={user?.email} />

                <Accordeon
                    titre="Celliers"
                    content={<ListCelliers></ListCelliers>}
                ></Accordeon>

                <Accordeon
                    titre="Ajouter Cellier"
                    content={
                        <AddCelLayout>
                            <AddCellierForm />
                        </AddCelLayout>
                    }
                ></Accordeon>

    
                {/* <Button bg="#303031" color="#fff">
                    MODIFIER
                </Button> */}
            </MonCompteCountainer>
        </>
    );
};

export default MonCompte;
