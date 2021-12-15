import { useState, useEffect } from "react";

const useForm = (initialValues, formLogic, validate) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setSubmitting] = useState(false);
    const [touched, setTouched] = useState([]);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    // useEffect executé automatiquement quand le composant mounts
    // mais c'est uniquement si le form est en train d'être soumis que l'on envoie les données au serveur
    useEffect(() => {
        let disposed = false;
        // si le user a cliqué sur submit et donc isSubmitting = true
        if (isSubmitting) {
            // on check si on a aucune erreur avant de soumettre
            const noErrors = Object.keys(errors).length === 0;
            // si on a bien aucune erreur, on fait la requête HTTP
            if (noErrors) {
                formLogic(values) // c'est async
                    .then(() => {
                        resetForm(); // on HTTP success, on reset le form
                    })
                    // gestion des erreurs backend (email déjà pris par exemple pour le register)
                    .catch((error) => {
                        console.log(error?.response?.data.errors);
                        // un peu de manip car Laravel renvoie ces erreurs dans un array
                        const errors = error?.response?.data.errors;

                        if (errors) {
                            let backendErrors = {};
                            Object.keys(errors).forEach((field) => {
                                backendErrors[field] = errors[field].join();
                            });

                            setErrors({ ...backendErrors }); // set les erreurs du backend dans le state pour affichage
                            setSubmitting(false);
                        }
                    });
                // si des erreurs reviennent backend
            } else {
                setSubmitting(false);
            }
        }
        return () => (disposed = true);
    }, [isSubmitting, errors]); // on rerun le useEffect quand ces 2 variables changent

    useEffect(() => {
        const validationErrors = validate(values);
        const touchedErrors = Object.keys(validationErrors)
            .filter((key) => touched.includes(key))
            .reduce((acc, key) => {
                if (!acc[key]) {
                    acc[key] = validationErrors[key];
                }
                return acc;
            }, {});
        setErrors(touchedErrors);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [touched, values]);

    // contrôle de ce que le user entre dans les champs
    const handleFormChange = (event) => {
        event.persist();
        if (event.target.name === "prix_achat") {
            setValues((values) => ({
                ...values,
                prix_achat: parseFloat(event.target.value),
            }));
        } else {
            console.log(event.target.name)
            // on set dans le state du hook dynamiquement le nom de l'input avec la valeur entrée
            setValues((values) => ({
                ...values,
                [event.target.name]: event.target.value,
            }));
        }
    };

    // soummission du form
    const handleFormSubmit = (event) => {
        event.preventDefault();
        // on utilise notre custom validation (le 3eme argument du hook)
        const validationErrors = validate(values); // retourne un objet d'erreurs ou un objet vide
        setErrors(validationErrors); // set les erreurs dans le state du hook
        setSubmitting(true); // le form est en train d'être soumis (utile pour disable le bouton)
    };

    const handleImageChange = (url_img) => {
        setValues((values) => ({
            ...values,
            url_img,
        }));
    };

    // gestion du blur
    const handleBlur = (event) => {
        if (!touched.includes(event.target.name)) {
            setTouched([...touched, event.target.name]);
        }
    };

    // reset du form et des erreurs quand le form est valide et la data envoyée vers l'API vino
    const resetForm = () => {
        setTouched([]);
        setSubmitting(false);
        setErrors({});
        setValues(initialValues);
    };

    // le hook retourne ça! on va pouvoir les utiliser dans nos forms
    // c'est le but des hooks: encapsuler toute la logique dans les hooks et ceux-ci retournent des objets
    // et des méthodes prêtes à l'emploi
    return {
        handleFormChange,
        handleFormSubmit,
        handleImageChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
        resetForm,
    };
};

export default useForm;
