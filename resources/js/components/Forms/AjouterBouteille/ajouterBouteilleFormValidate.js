const ajouterBouteilleFormValidate = (values) => {
    let errors = {};

    if (!values.nom) {
        errors.nom = "Veuillez entrer un nom";
    }

    if (!values.millesime) {
        errors.millesime = "Veuillez entrer un millesime";
    }

    if (!values.quantite) {
        errors.quantite = "Veuillez entrer une quantité";
    }

    if (!values.prix_achat) {
        errors.prix_achat = "Veuillez entrer un prix d'achat";
    }

    if (!values.pays) {
        errors.pays = "Veuillez entrer un prix";
    }

    if (!values.date_achat) {
        errors.date_achat = "Veuillez entrer une date d'achat";
    }

    if (!values.prix_achat) {
        errors.prix = "Veuillez entrer un prix";
    }

    if (values.note > 10) {
        errors.note = "Veuillez entrer une note inférieure ou egale à 10";
    }

    if (!values.description) {
        errors.description = "Veuillez entrer une description";
    }

    return errors;
};

export default ajouterBouteilleFormValidate;
