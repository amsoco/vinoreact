import React from "react";
import useForm from "../../../hooks/useForm";
import { Form, LegendDark } from "../../styles/Form.styled";
import { Button } from "../../styles/Button.styled";
import Accordeon from "../../Accordeon";
import ajouterBouteilleFormValidate from "./ajouterBouteilleFormValidate";
import EditionAjoutFormInput from "./EditionAjoutInput";

const AjouterBouteilleForm = ({ bouteille }) => {
    console.log("bouteille", bouteille);
    // INITIAL FORM STATE
    const initialValues = {
        cellier: "",
        nom: bouteille.nom || "",
        millesime: bouteille.millesime || "",
        quantite: "",
        pays: bouteille.pays || "",
        date_achat: "",
        prix: "",
        description: bouteille.description || "",
        photo: bouteille.url_img || "",
    };

    // FORM LOGIC ON SUBMIT
    const ajouterBouteille = async (values) => {
        console.log(values);
    };

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, ajouterBouteille, ajouterBouteilleFormValidate);

    console.log("values", values);
    return (
        <Form onSubmit={handleFormSubmit}>
            <LegendDark>Nouvelle Bouteille</LegendDark>

            <EditionAjoutFormInput
                type="text"
                id="nom"
                name="nom"
                placeholder="Nom"
                value={values.nom}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.nom}
            />

            <EditionAjoutFormInput
                type="text"
                id="millesime"
                name="millesime"
                placeholder="Millesime"
                value={values.millesime}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.millesime}
            />

            <EditionAjoutFormInput
                type="number"
                id="quantite"
                name="quantite"
                placeholder="Quantite"
                value={values.quantite}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.quantite}
            />

            <EditionAjoutFormInput
                type="text"
                id="pays"
                name="pays"
                placeholder="Pays"
                value={values.pays}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.pays}
            />

            <EditionAjoutFormInput
                type="text"
                id="date_achat"
                name="date_achat"
                placeholder="Date d'achat"
                value={values.date_achat}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.date_achat}
            />

            <EditionAjoutFormInput
                type="number"
                id="prix"
                name="prix"
                placeholder="Prix"
                value={values.prix}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.prix}
            />

            <Accordeon
                titre="Description"
                content={
                    <EditionAjoutFormInput
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleFormChange}
                        onBlur={handleBlur}
                        error={errors?.description}
                    />
                }
            />

            <Accordeon
                titre="Photo"
                content={
                    <EditionAjoutFormInput
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={values.description}
                        onChange={handleFormChange}
                        onBlur={handleBlur}
                        error={errors?.description}
                    />
                }
            />

            <Button
                type="submit"
                bg="#000"
                color="#fff"
                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                AJOUTER
            </Button>
        </Form>
    );
};

export default AjouterBouteilleForm;
