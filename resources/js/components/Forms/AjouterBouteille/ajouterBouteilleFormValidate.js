const ajouterBouteilleFormValidate = (values) => {
    let errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Le courriel est invalide";
    }

    if (!values.cellier) {
        errors.cellier = "Veuillez sélectionner un cellier";
    }

    if (!values.nom) {
        errors.nom = "Veuillez entrer un nom";
    }

    if (!values.millesime) {
        errors.millesime = "Veuillez entrer un millesime";
    }

    if (!values.quantite) {
        errors.quantite = "Veuillez entrer une quantité";
    }

    if (!values.pays) {
        errors.pays = "Veuillez entrer un prix";
    }

    if (!values.date_achat) {
        errors.date_achat = "Veuillez entrer une date d'achat";
    }

    if (!values.prix) {
        errors.prix = "Veuillez entrer un prix";
    }

    if (!values.description) {
        errors.description = "Veuillez entrer une description";
    }

    return errors;
};

export default ajouterBouteilleFormValidate;
