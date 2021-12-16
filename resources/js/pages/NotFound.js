import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div style={{marginTop: '80px'}}>
            <h2 style={{textAlign: 'center'}}>Oups!</h2>
            <p style={{textAlign: 'center', marginTop: '20px'}}>Vous êtes perdu dans le vino ...</p>
            <p style={{textAlign: 'center', marginTop: '20px'}}><Link to="/celliers">Accueil
      </Link></p>
        </div>
    );
};

export default NotFound ;