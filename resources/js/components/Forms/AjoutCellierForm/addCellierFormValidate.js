const addCellierFormValidate = (values) => {
    let errors = {};
    if (values.nom_cellier.length > 100) {
        errors.nom_cellier =
            "Le nom du cellier doit avoir moins de 100 caractères";
    }

    if (!values.nom_cellier) {
        errors.nom_cellier = "Veuillez donner un nom à votre cellier";
    }

    return errors;
};

export default addCellierFormValidate;
