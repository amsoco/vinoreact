import React from "react";
import FormInput from "../FormInput";
import { Button } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import { Legend } from "../../styles/Form.styled";
import { CustomLink } from "../../styles/Link.styled";
import useForm from "../../../hooks/useForm";
import { useUser } from "../../../context/user";
// validation du formulaire
import registerFormValidate from "./registerFormValidate";
import { useNavigate } from "react-router";

const RegisterForm = () => {
    const navigate = useNavigate();
    const { register } = useUser();

    // INITIAL FORM STATE
    const initialValues = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    };

    // FORM LOGIC ON SUBMIT
    const registerUser = async (values) => {
        await register(values);
        return navigate("/celliers");
    };

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, registerUser, registerFormValidate);

    return (
        <Form onSubmit={handleFormSubmit}>
            <Legend>Nouveau membre</Legend>
            <FormInput
                type="text"
                id="name"
                name="name"
                label="Nom Usager"
                value={values.name}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.name}
            />

            <FormInput
                type="email"
                id="email"
                name="email"
                label="Courriel"
                value={values.email}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.email}
            />

            <FormInput
                type="password"
                id="password"
                name="password"
                label="Mot de passe"
                value={values.password}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.password}
            />

            <FormInput
                type="password"
                id="password_confirmation"
                name="password_confirmation"
                label="Confirmer le mot de passe"
                value={values.password_confirmation}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.password_confirmation}
            />
            <Button
                type="submit"
                bg="transparent"
                color="#fff"
                borderColor="#fff"
                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                CRÉER
            </Button>
            <CustomLink to="/">J'ai déjà un compte</CustomLink>
        </Form>
    );
};

export default RegisterForm;
