import React, { useEffect, useState } from "react";
import { AjoutModifUsager, Countainer } from "./styles/AjoutModifUsager.styled";

import { Button } from "./styles/Button.styled";
import EditionAjoutFormInput from "./Forms/AjouterBouteille/EditionAjoutInput";

import { useCellier } from "../context/cellier";
import useForm from "../hooks/useForm";

import ajouterBouteilleFormValidateWiki from "./Forms/AjouterBouteille/ajouterBouteilleFormValidateWiki";
import Admin from "../pages/Admin";
import { useParams, useNavigate } from "react-router-dom";
import { SelectCategorie } from "./styles/Input.styled";
import InputFile from "./InputFile";

/*

*/
const AdminAjoutBouteille = () => {

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();
    const {
        getCategories,
        addBouteilleWiki,
        modifierBouteilleWiki,

        getBouteilleWiki,
    } = useCellier();
    const { admin, wiki, id } = useParams();
    const [laBouteille, setBouteille] = useState({
        type: "editBouteille",
        id: "",
        nom: "",
        pays: "",
        description: "",
        url_saq: "",
        format: "",
        millesime: "",
        //url_img: "https://res.cloudinary.com/vino-project/image/upload/v1639165462/bouteilleBlack_lz3rkm.png",
        url_img: "",
        categorie_id: "",
        categorie: "",
    });

    // récupération des catégories de vin pour populer le <select>
    useEffect(() => {
        let isSubscribed = true
        getCategories().then(({ data }) => setCategories(data));
        return () => (isSubscribed = false);
    }, []);

    if (id) {
        useEffect(() => {
            let isSubscribed = true;
            getBouteilleWiki(id).then(({ data }) => {
                const bouteille = data;
                console.log(bouteille);
                setBouteille({
                    type: "editBouteille",
                    id: bouteille.id,
                    nom: bouteille.nom,
                    pays: bouteille.pays,
                    description: bouteille.description,
                    url_saq: bouteille.url_saq,
                    format: bouteille.format,
                    millesime: bouteille.millesime,
                    url_img: bouteille.url_img,
                    categorie_id: bouteille.categorie_id,
                    categorie: bouteille.categorie,
                });
            });

            return () => (isSubscribed = false);
        }, []);
    }

    const initialValues = laBouteille;

    /**
     * Ajouter une bouteille dans Wiki_vin
     * @param {object} values
     * @returns {void}
     */
    const ajouterBouteilleWiki = async (values) => {
        console.log(values);
        try {
            await addBouteilleWiki(values);
        } catch (error) {
            console.error(error);
        }
        navigate("/admin/wiki-vin");
    };

    /**
     * Editer une bouteille
     * @param {object} values
     * @returns {void}
     */
    const editerBouteilleWiki = async (values) => {
        await modifierBouteilleWiki(id, values);
        navigate("/admin/wiki-vin");
    };

    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation

    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        //handleBlur,
        handleImageChange,
        isSubmitting,
    } = useForm(
        initialValues,
        id ? editerBouteilleWiki : ajouterBouteilleWiki, // mode édition ou ajout
        ajouterBouteilleFormValidateWiki
    );

    return (
        <Admin>
            <Countainer>
                <div>
                    <h4>{id ? "Modifier Bouteille" : "Ajouter Bouteille"}</h4>
                </div>
                <AjoutModifUsager onSubmit={handleFormSubmit}>
                    <EditionAjoutFormInput
                        type="text"
                        id="nom"
                        name="nom"
                        placeholder="Nom"
                        value={values?.nom}
                        onChange={handleFormChange}
                        // onBlur={handleBlur}
                        error={errors?.nom}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="pays"
                        name="pays"
                        placeholder="Pays"
                        value={values?.pays}
                        onChange={handleFormChange}
                        // onBlur={handleBlur}
                        error={errors?.pays}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={values?.description}
                        onChange={handleFormChange}
                        // onBlur={handleBlur}
                        error={errors?.description}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="url_saq"
                        name="url_saq"
                        placeholder="Url SAQ"
                        value={values?.url_saq}
                        onChange={handleFormChange}
                        //onBlur={handleBlur}
                        error={errors?.url_saq}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="format"
                        name="format"
                        placeholder="Format"
                        value={values?.format}
                        onChange={handleFormChange}
                        // onBlur={handleBlur}
                        error={errors?.format}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="millesime"
                        name="millesime"
                        placeholder="Millesime"
                        value={values?.millesime}
                        onChange={handleFormChange}
                        //  onBlur={handleBlur}
                        error={errors?.millesime}
                    />

                    <SelectCategorie
                        name="categorie_id"
                        value={values?.categorie_id}
                        onChange={handleFormChange}
                        value={values?.categorie_id}
                    >
                        <option>Catégorie</option>
                        {categories.map((categorie) => (
                            <option key={categorie.id} value={categorie.id}>
                                {categorie.nom}
                            </option>
                        ))}
                    </SelectCategorie>
                    {values.url_img && (
                        <InputFile
                            id="url_img"
                            name="url_img"
                            onImageChange={(img) => handleImageChange(img)}
                            existingImg={values?.url_img}
                        />
                    )}

                    <Button
                        type="submit"
                        bg="#303031"
                        color="#fff"
                        bgHover="white"
                        colorHover="#303030"
                        disabled={isSubmitting}
                    >
                        {laBouteille?.id ? "Éditer" : "Ajouter"}
                    </Button>
                </AjoutModifUsager>
            </Countainer>
        </Admin>
    );
};

export default AdminAjoutBouteille;
