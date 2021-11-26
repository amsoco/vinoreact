import React from 'react'
import { BouteilleSection } from '../components/styles/Bouteille.styled';
import { Button } from '../components/styles/Button.styled';
import NavBar from "../components/NavBar";
import Accordeon from "../components/Accordeon";

const Bouteille = (props) => {


    

    


    return (
        <BouteilleSection>
            <NavBar/>
           
           <h1>Chambolle Musigny</h1>
           <h3></h3> 

           <Accordeon titre='Description' content="Vin mousseu bon"></Accordeon>
           <Accordeon titre='Notes' content="Vin mousseu bon"></Accordeon>
           <Accordeon titre='Modification' content="Vin mousseu bon"></Accordeon>
        </BouteilleSection>
    )
}

export default Bouteille
