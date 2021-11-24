const loginFormValidate = (values) => {
    let errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Le courriel est invalide";
    }
    
    if (!values.email) {
        errors.email = "Le courriel est requis";
    }

    if (!values.password) {
        errors.password = "Le mot de passe est requis";
    }

    return errors;
};

export default loginFormValidate;
