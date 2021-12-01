import React from "react";
import { FilDariane} from "./styles/FilDariane.styled";
import { useParams , Link} from 'react-router-dom';



const filDariane = ({children}) => {
    const searchParams = useParams();
    console.log(searchParams); 

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
