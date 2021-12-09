import React from "react";
import { FilDariane} from "./styles/FilDariane.styled";
import { useParams , Link} from 'react-router-dom';

// aller chercher l'info pour de fil d'ariane
const filDariane = ({children}) => {
    const searchParams = useParams();
    console.log('params', searchParams)

    // composant fil d'ariane aka navigation aka breadcrumbs
    return (
            <FilDariane> 
                <Link to="/celliers"><span>Accueil</span></Link>
                <span>/</span>
                <Link to={`/${searchParams.cellier}`}><span>{searchParams.cellier}</span></Link>
                <span>/</span>
                <span>{searchParams.bouteilleId ? searchParams.bouteilleId : '' }</span>
            </FilDariane>
    )

}


export default filDariane;
