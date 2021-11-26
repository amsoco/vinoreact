import React from 'react'
import { BouteilleSection } from '../components/styles/Bouteille.styled';
import { Button } from '../components/styles/Button.styled';
import NavBar from "../components/NavBar";
import Accordeon from "../components/Accordeon";
import BouteillePhoto from "../assets/images/bouteille.jpg";

const Bouteille = (props) => {


    

    


    return (
        <BouteilleSection>
            <img src={BouteillePhoto} alt="logo" /> 
           <h1>Chambolle Musigny</h1>
           <h3>Quantité 8</h3> 

            <div>
                <Accordeon titre='Description' content="Vin mousseu bon"></Accordeon>
                <Accordeon titre='Notes' content="Vin mousseu bon"></Accordeon>
                <Accordeon titre='Modification' content="Vin mousseu bon"></Accordeon>
            </div>
            <Button bg="#fff" color="#303031" colorHover="#fff" bgHover="#303031">
                AJOUTER
            </Button>
            <Button bg="#303031" color="#fff">
                BOIRE
            </Button >
        </BouteilleSection>
    )
}

export default Bouteille
