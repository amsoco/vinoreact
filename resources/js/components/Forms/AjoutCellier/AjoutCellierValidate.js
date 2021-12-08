const AjoutCellierValidate = (values) => {
    let errors = {};
    if (values.password.length > 100) {
        errors.password =
            "Le nom du cellier doit avoir moins de 100 caractères";
    }

    if (!values.nom_cellier) {
        errors.nom_cellier = "Veuillez donner un nom à votre cellier";
    }

    return errors;
};

export default AjoutCellierValidate;
