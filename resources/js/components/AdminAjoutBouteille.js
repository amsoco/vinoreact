import React, { useEffect, useState } from "react";
import { AjoutModifUsager, Countainer } from "./styles/AjoutModifUsager.styled";
import {Form} from "./styles/Form.styled";
import { Button } from "./styles/Button.styled";
import EditionAjoutFormInput from "./Forms/AjouterBouteille/EditionAjoutInput";
import { useUser } from "../context/user";
import { useCellier } from "../context/cellier";
import useForm from "../hooks/useForm";
import registerFormValidate from "./Forms/RegisterForm/registerFormValidate";
import ajouterBouteilleFormValidate from "./Forms/AjouterBouteille/ajouterBouteilleFormValidate";
import Admin from "../pages/Admin";
import { useNavigate, useParams } from "react-router";
import { SelectCategorie } from "./styles/Input.styled";
import InputFile from "./InputFile";

const AdminAjoutBouteille = ({ bouteille }) => {
    const [categories, setCategories] = useState([]);
    //const [laBouteille, setBouteille] = useState("")
    const { addBouteille, getCategories, modifierBouteille, getBouteille } = useCellier();
    const { admin , wki , id } = useParams();
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const [initialValues, setInitialValues] = useState({
        nom:  "",
        pays:  "",
        description:  "",
        url_saq:  "",
        format:  "",
        millesime:  "",
        url_img: "https://res.cloudinary.com/vino-project/image/upload/v1639165462/bouteilleBlack_lz3rkm.png",
        categorie_id:  "",
        categorie:  "",

});


    useEffect(() => {
        let isSubscribed = true;
        if(id) {
            // getBouteille(id).then(({ data: { nom, pays, description, url_saq, format, millesime, url_img, categorie_id, categorie } }) => {
            getBouteille(id).then(( {data} ) => {
                const {bouteille, categorie} = data;
                const {nom, pays, description, url_saq, format, millesime, url_img, categorie_id} = bouteille;
                console.log(nom)
                setInitialValues({
                    nom, pays, description, url_saq, format, millesime, url_img, categorie_id, categorie
                });
            });
        }
        // récupération des catégories de vin pour populer le <select>
        getCategories().then(({ data }) => setCategories(data));
        return () => (isSubscribed = false);
    }, []);


    // INITIAL FORM STATE
    
    /*
    let initialValues = {
        
        nom: bouteille?.nom || "",
        pays: bouteille?.pays || "",
        description: bouteille?.description || "",
        url_saq: bouteille?.url_saq || "",
        format: bouteille?.format || "",
        millesime: bouteille?.millesime || "",
        url_img:
            bouteille?.url_img ||
            "https://res.cloudinary.com/vino-project/image/upload/v1639165462/bouteilleBlack_lz3rkm.png",
        categorie_id: bouteille?.categorie_id || "",
        categorie: bouteille?.categorie || "",
    };
    */

    /**
     * Ajouter une bouteille dans Wiki_vin  
     * @param {object} values
     * @returns {void}
     */
    const ajouterBouteille = async (values) => {
        /* console.log('ajout', values)
        try {
            await addBouteille(values);
            navigate(`/${cellier}`);
        } catch (error) {
            console.error(error);
        } */
    };

    /**
     * Editer une bouteille
     * @param {object} values
     * @returns {void}
     */
    const editerBouteille = async (values) => {
        /* try {
            await modifierBouteille(bouteilleId, values);
            navigate(`/${cellier}/${bouteilleId}`);
        } catch (error) {
            console.error(error);
        } */
    };

   // console.log('bouteille', bouteille)
    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    
    const {
        handleFormSubmit,
        handleFormChange,
        //values,
        errors,
        //handleBlur,
        handleImageChange,
        isSubmitting,
    } = useForm(
        initialValues,
        bouteille?.id ? editerBouteille : ajouterBouteille, // mode édition ou ajout
        ajouterBouteilleFormValidate
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
                value={ values?.nom || ""}
                onChange={handleFormChange}
               // onBlur={handleBlur}
                error={errors?.nom}
            />
            <EditionAjoutFormInput
                type="text"
                id="pays"
                name="pays"
                placeholder="Pays"
                value={ values?.pays || ""}
                onChange={handleFormChange}
               // onBlur={handleBlur}
                error={errors?.pays}
            />
            <EditionAjoutFormInput
                type="text"
                id="description"
                name="description"
                placeholder="Description"
                value={values?.description || ""}
                onChange={handleFormChange}
               // onBlur={handleBlur}
                error={errors?.description}
            />
            <EditionAjoutFormInput
                type="text"
                id="url_saq"
                name="url_saq"
                placeholder="Url SAQ"
                value={values?.url_saq || ""}
                onChange={handleFormChange}
                //onBlur={handleBlur}
                error={errors?.url_saq}
            />
            <EditionAjoutFormInput
                type="text"
                id="format"
                name="format"
                placeholder="Format"
                value={values?.format || ""}
                onChange={handleFormChange}
               // onBlur={handleBlur}
                error={errors?.format}
            />
            <EditionAjoutFormInput
                type="text"
                id="millesime"
                name="millesime"
                placeholder="Millesime"
                value={values?.millesime || ""}
                onChange={handleFormChange}
              //  onBlur={handleBlur}
                error={errors?.millesime}
            />

            <SelectCategorie
                name="categorie_id"
                value={values?.categorie_id}
                onChange={handleFormChange}
                value={values?.categorie_id || ""}
            >
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
                existingImg={values?.url_img}
            />

            <Button
                type="submit"
                bg="#303031"
                color="#fff"

                bgHover="white"
                colorHover="#303030"
                disabled={isSubmitting}
            >
                {bouteille?.id ? "Éditer" : "Ajouter"}
            </Button> 
        </AjoutModifUsager>
        </Countainer>
        </Admin>
    );

    
};

export default AdminAjoutBouteille;

