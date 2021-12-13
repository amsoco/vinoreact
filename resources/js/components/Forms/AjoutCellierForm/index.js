import React from "react";
import FormInput from "../FormInput";
import { Button } from "../../styles/Button.styled";
import { Form } from "../../styles/Form.styled";
import { Legend2 } from "../../styles/Form.styled";
import useForm from "../../../hooks/useForm";
import Http from "../../../HttpClient";
// validation du formulaire
import addCellierFormValidate from "./addCellierFormValidate";
import { useNavigate } from "react-router";
import { slugify } from "../../../helpers/slugify";

const AddCellierForm = () => {
    const navigate = useNavigate();
    const user = sessionStorage.getItem("user");
    // INITIAL FORM STATE
    const initialValues = {
        nom_cellier: "",
        user_id: user,
    };
    const registerCellier = async (values) => {
        await Http.post(`cellier/create`, values);
        const { data } = await Http.post(`cellier/create`, values);
        localStorage.setItem("cellier", JSON.stringify(data));
        const slug = slugify(data.nom_cellier);
        navigate(`/${slug}`);
    };
    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, registerCellier, addCellierFormValidate);
    return (
        <Form onSubmit={handleFormSubmit}>
            <Legend2>Nouveau cellier</Legend2>
            <FormInput
                type="text"
                id="nom_cellier"
                name="nom_cellier"
                label="Nom de votre cellier"
                value={values.nom_cellier}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.nom_cellier}
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
                AJOUTER
            </Button>
        </Form>
    );
};

export default AddCellierForm;
