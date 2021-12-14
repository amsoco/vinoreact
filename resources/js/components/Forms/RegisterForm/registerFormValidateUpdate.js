
const registerFormValidateUpdate = (values) => {
    
    let errors = {};

    if (!values.name) {
        errors.name = "Le nom est requis";
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Le courriel est invalide";
    }

    return errors;
};

export default registerFormValidateUpdate;