import React, { useEffect, useState } from "react";
import { AjoutModifUsager, Countainer } from "./styles/AjoutModifUsager.styled";
//import {Form} from "./styles/Form.styled";
import { Button } from "./styles/Button.styled";
import EditionAjoutFormInput from "./Forms/AjouterBouteille/EditionAjoutInput";
import { useUser } from "../context/user";
import useForm from "../hooks/useForm";
import registerFormValidate from "./Forms/RegisterForm/registerFormValidate";
import registerFormValidateUpdate from "./Forms/RegisterForm/registerFormValidateUpdate";
import { useNavigate } from "react-router";
import { useAdmin } from "../pages/Admin";


// composante Pour ajouter et modifier usager
const AdminAjoutUsager = (props) => {
    const { user } = useUser();
    const { register } = useUser();
    const { updateUsager } = useUser();
    const { RouteAdmin } = useAdmin();


    if (props.id) {

        const initialValues = {
            id : props.id || "",
            name:  props.nom || "",
            email:  props.email || "",
        };


        const registerUser = async (values) => {
            const data = await updateUsager(values);
                RouteAdmin('user')
        };



    // USEFORM HOOK: prend les champs initiaux du form, la logique de soumission du form et la validation
    const {
        handleFormSubmit,
        handleFormChange,
        values,
        errors,
        handleBlur,
        isSubmitting,
    } = useForm(initialValues, registerUser, registerFormValidateUpdate);

        return (
            <Countainer>
                <div>
                    <h4>Modifier Usager</h4>
                </div>
                <AjoutModifUsager onSubmit={handleFormSubmit}>

                    <EditionAjoutFormInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nom"
                        value={values.name}
                        onChange={handleFormChange}
                        error={errors?.name}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Courriel"
                        value={values.email}
                        onChange={handleFormChange}
                        error={errors?.email}
                    />
                    <Button
                        type="submit"
                        bg="#303031"
                        color="#fff"
                        bgHover="white"
                        colorHover="#303030"
                        disabled={isSubmitting}
                    >
                    Modifier
                    </Button>
                </AjoutModifUsager>
            </Countainer>
        )
    

    } else {

        const initialValues = {
            id : props.id || "",
            name:  props.nom || "",
            email:  props.email || "",
            privilege_id: 1,
            password: "",
            nom_cellier: "",
            password_confirmation: "",
        };
    
    
        const registerUser = async (values) => {
            const data = await register(values);
            RouteAdmin('user')
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
            <Countainer>
                <div>
                    <h4>Ajout Usager</h4>
                </div>
                <AjoutModifUsager onSubmit={handleFormSubmit}>
                    <EditionAjoutFormInput
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nom"
                        value={values.name}
                        onChange={handleFormChange}
                        error={errors?.name}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="email"
                        name="email"
                        placeholder="Courriel"
                        value={values.email}
                        onChange={handleFormChange}
                        error={errors?.email}
                    />
                    <EditionAjoutFormInput
                        type="text"
                        id="nom_cellier"
                        name="nom_cellier"
                        placeholder="Nom cellier"
                        value={values.nom_cellier}
                        onChange={handleFormChange}
                        error={errors?.nom_cellier}
                    />
                    <EditionAjoutFormInput
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        placeholder="Mot de passe"
                        onChange={handleFormChange}
                        onBlur={handleBlur}
                        error={errors?.password}
                    />
                    <EditionAjoutFormInput
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Confirmer le mot de passe"
                        value={values.password_confirmation}
                        onChange={handleFormChange}
                        onBlur={handleBlur}
                        error={errors?.password_confirmation}
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
                </AjoutModifUsager>
            </Countainer>
        )
    
    }

}
export default AdminAjoutUsager;