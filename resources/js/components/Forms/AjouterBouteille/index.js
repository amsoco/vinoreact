import React from "react";
import styled from "styled-components";
import useForm from "../../../hooks/useForm";
import { LegendDark } from "../../styles/Form.styled";
import { Button } from "../../styles/Button.styled";
import Accordeon from "../../Accordeon";
import ajouterBouteilleFormValidate from "./ajouterBouteilleFormValidate";
import EditionAjoutFormInput from "./EditionAjoutInput";
import InputFile from "../../InputFile";
import { useCellier } from "../../../context/cellier";
import { useNavigate, useParams } from "react-router-dom";

const AjouterBouteilleForm = ({ bouteille }) => {
    const { addBouteille } = useCellier();
    const navigate = useNavigate();
    const { celliers } = useParams();

    // INITIAL FORM STATE
    const initialValues = {
        cellier_id: JSON.parse(localStorage.getItem("cellier")).id,
        nom: bouteille.nom || "",
        pays: bouteille.pays || "",
        description: bouteille.description || "",
        date_achat: "",
        prix_achat: "",
        url_saq: "",
        note: "",
        commentaire: "",
        quantite: "",
        millesime: bouteille.millesime || "",
        format: "",
        url_img: bouteille.url_img || "",
        categorie_id: 1,
    };

    // FORM LOGIC ON SUBMIT
    const ajouterBouteille = async (values) => {
        console.log("values", values);
        const bouteille = await addBouteille(values);
        //navigate(`/${celliers}`);
    };

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        handleImageChange,
        isSubmitting,
    } = useForm(initialValues, ajouterBouteille, ajouterBouteilleFormValidate);

    return (
        <FormAjout onSubmit={handleFormSubmit}>
            <LegendDark>Nouvelle Bouteille</LegendDark>

            <EditionAjoutFormInput
                type="text"
                id="nom"
                name="nom"
                placeholder="Nom"
                value={values.nom}
                onChange={handleFormChange}
                error={errors?.nom}
            />

            <EditionAjoutFormInput
                type="text"
                id="pays"
                name="pays"
                placeholder="Pays"
                value={values.pays}
                onChange={handleFormChange}
                error={errors?.pays}
            />

            <EditionAjoutFormInput
                type="text"
                id="date_achat"
                name="date_achat"
                placeholder="Date d'achat"
                value={values.date_achat}
                onChange={handleFormChange}
                error={errors?.date_achat}
            />

            <EditionAjoutFormInput
                type="number"
                id="prix_achat"
                name="prix_achat"
                placeholder="Prix"
                value={values.prix_achat}
                onChange={handleFormChange}
                error={errors?.prix_achat}
            />

            <EditionAjoutFormInput
                type="text"
                id="url_saq"
                name="url_saq"
                placeholder="Url SAQ"
                value={values.url_saq}
                onChange={handleFormChange}
                error={errors?.url_saq}
            />

            <EditionAjoutFormInput
                type="number"
                id="note"
                name="note"
                max="10"
                placeholder="Note sur 10"
                value={values.note}
                onChange={handleFormChange}
                error={errors?.note}
            />

            <EditionAjoutFormInput
                type="text"
                id="commentaire"
                name="commentaire"
                placeholder="Commentaire"
                value={values.commentaire}
                onChange={handleFormChange}
                error={errors?.commentaire}
            />

            <EditionAjoutFormInput
                type="number"
                id="quantite"
                name="quantite"
                placeholder="Quantite"
                value={values.quantite}
                onChange={handleFormChange}
                error={errors?.quantite}
            />

            <EditionAjoutFormInput
                type="text"
                id="millesime"
                name="millesime"
                placeholder="Millesime"
                value={values.millesime}
                onChange={handleFormChange}
                error={errors?.millesime}
            />

            <EditionAjoutFormInput
                type="text"
                id="format"
                name="format"
                placeholder="Format"
                value={values.format}
                onChange={handleFormChange}
                error={errors?.format}
            />

            <Accordeon
                titre="Description"
                content={
                    <EditionAjoutFormInput
                        type="text"
                        id="description"
                        name="description"
                        value={values.description}
                        onChange={handleFormChange}
                        error={errors?.description}
                    />
                }
            />

            <Accordeon
                titre="Image"
                content={
                    <InputFile
                        id="url_img"
                        name="url_img"
                        onImageChange={handleImageChange}
                        existingImg={values.url_img}
                    />
                }
            />

            <Button
                type="submit"
                bg="#303031"
                color="#fff"
                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                AJOUTER
            </Button>
        </FormAjout>
    );
};

export default AjouterBouteilleForm;

const FormAjout = styled.form`
    width: 100%;

    ${Button} {
        margin: 60px 0;
    }
`;
