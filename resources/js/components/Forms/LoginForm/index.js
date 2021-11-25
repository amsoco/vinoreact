import React from "react";
import FormInput from "../FormInput";
import { Button } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import { Legend } from "../../styles/Form.styled";
import { CustomLink } from "../../styles/Link.styled";
import useForm from "../../../hooks/useForm";
import { useUser } from "../../../context/user";
// validation du formulaire
import loginFormValidate from "./loginFormValidate";
import { useNavigate } from "react-router";
import BouteilleBlackLogo from "../../../assets/images/bouteilleBlack.png";

const LoginForm = () => {
    const { login } = useUser();
    const navigate = useNavigate();

    // INITIAL FORM STATE
    const initialValues = {
        email: "",
        password: "",
    };

    // FORM LOGIC ON SUBMIT
    const loginUser = async (values) => {
        await login(values);
        return navigate("/vino");
    };

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, loginUser, loginFormValidate);

    return (
        <Form onSubmit={handleFormSubmit}>
            <Legend>
                Vino
                <img src={BouteilleBlackLogo} alt="Logo Bouteille vino" />
            </Legend>

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
            <Button
                type="submit"
                bg="transparent"
                color="#fff"
                borderColor="#fff"
                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                CONNECTER
            </Button>
            <CustomLink to="/nouveau-compte">Nouveau membre?</CustomLink>
        </Form>
    );
};

export default LoginForm;
