import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useForm from "../../../hooks/useForm";
import { LegendDark } from "../../styles/Form.styled";
import { Button } from "../../styles/Button.styled";
import ajouterBouteilleFormValidate from "./ajouterBouteilleFormValidate";
import EditionAjoutFormInput from "./EditionAjoutInput";
import InputFile from "../../InputFile";
import { SelectCategorie } from "../../styles/Input.styled";
import { useCellier } from "../../../context/cellier";
import { useNavigate, useParams } from "react-router-dom";

const AjouterBouteilleForm = ({ bouteille }) => {
    const { addBouteille, getCategories } = useCellier();
    const navigate = useNavigate();
    const { cellier, bouteilleId } = useParams();
    const [categories, setCategories] = useState([]);

    // récupération des catégories de vin pour le select
    useEffect(() => {
        getCategories().then(({ data }) => setCategories(data));
    }, []);

    // INITIAL FORM STATE
    let initialValues = {
        cellier_id: JSON.parse(localStorage.getItem("cellier")).id,
        nom: bouteille?.nom || "",
        pays: bouteille?.pays || "",
        description: bouteille?.description || "",
        date_achat: "",
        prix_achat: "",
        url_saq: bouteille?.url_saq || "",
        note: "",
        commentaire: "",
        quantite: "",
        millesime: bouteille?.millesime || "",
        format: bouteille?.format || "",
        url_img:
            bouteille?.url_img ||
            "https://res.cloudinary.com/vino-project/image/upload/v1639165462/bouteilleBlack_lz3rkm.png",
        categorie_id: bouteille?.categorie_id || "",
        categorie: bouteille?.categorie || ""
    };


    // FORM LOGIC ON SUBMIT
    const ajouterBouteille = async (values) => {
        try {
            await addBouteille(values);
            navigate(`/${cellier}`);
        } catch (error) {
            console.error(error);
        }
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
            <LegendDark>{bouteilleId ? 'Éditer une bouteille' : 'Nouvelle Bouteille'}</LegendDark>
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
                id="pays"
                name="pays"
                placeholder="Pays"
                value={values.pays}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.pays}
            />
            <EditionAjoutFormInput
                type="date"
                id="date_achat"
                name="date_achat"
                value={values.date_achat}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.date_achat}
            />
            <EditionAjoutFormInput
                type="number"
                id="prix_achat"
                name="prix_achat"
                placeholder="Prix"
                step=".01"
                value={values.prix_achat}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.prix_achat}
            />
            <EditionAjoutFormInput
                type="text"
                id="url_saq"
                name="url_saq"
                placeholder="Url SAQ"
                value={values.url_saq}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.url_saq}
            />
            <EditionAjoutFormInput
                type="number"
                id="note"
                name="note"
                max="5"
                placeholder="Note sur 5"
                value={values.note}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.note}
            />
            <EditionAjoutFormInput
                type="text"
                id="commentaire"
                name="commentaire"
                placeholder="Commentaire"
                value={values.commentaire}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.commentaire}
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
                id="millesime"
                name="millesime"
                placeholder="Millesime"
                value={values.millesime}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.millesime}
            />
            <EditionAjoutFormInput
                type="text"
                id="format"
                name="format"
                placeholder="Format"
                value={values.format}
                onChange={handleFormChange}
                onBlur={handleBlur}
                error={errors?.format}
            />
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
            <SelectCategorie name="categorie_id" value={values.categorie_id} onChange={handleFormChange}>
                <option>Catégorie</option>
                {categories.map((categorie) => (
                    <option key={categorie.id} value={categorie.id}>
                        {categorie.nom}
                    </option>
                ))}
            </SelectCategorie>
            <InputFile
                id="url_img"
                name="url_img"
                onImageChange={(img) => handleImageChange(img)}
                existingImg={values.url_img}
            />

            <Button
                type="submit"
                bg="#303031"
                color="#fff"
                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                {bouteilleId ? "Éditer" : "Ajouter"}
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
