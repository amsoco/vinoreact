// regex: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

const registerFormValidate = (values) => {
    
    let errors = {};

    if (!values.name) {
        errors.name = "Le nom est requis";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Le courriel est invalide";
    }

    if (!values.email) {
        errors.email = "Le courriel est requis";
    }

    if (!values.password) {
        errors.password = "Le mot de passe est requis";
    }

    if (values.password.length < 8) {
        errors.password = "Le mot de passe doit avoir au moins 8 caractères";
    }

    if (values.password_confirmation !== values.password) {
        errors.password_confirmation = "Les mots de passe ne correspondent pas";
    }

    if (!values.password_confirmation) {
        errors.password_confirmation =
            "Vous devez confirmer votre mot de passe";
    }

    if (!values.nom_cellier) {
        errors.nom_cellier = "Veuillez donner un nom à votre premier celiier";
    }

    return errors;
};

export default registerFormValidate;
