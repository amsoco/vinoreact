const ajouterBouteilleFormValidateWiki = (values) => {
    let errors = {};

    if (!values?.nom) {
        errors.nom = "Veuillez entrer un nom";
    }

    if (!values?.millesime) {
        errors.millesime = "Veuillez entrer un millesime";
    }

    if (!values?.pays) {
        errors.pays = "Veuillez entrer un prix";
    }

    if (!values?.description) {
        errors.description = "Veuillez entrer une description";
    }

    return errors;
};

export default ajouterBouteilleFormValidateWiki;
