import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CircleLoader from "./CircleLoader";
import { useCellier } from "../context/cellier";

// STYLED COMPONENTS
const Container = styled.div`
    border-top: 1px solid #d8d8d8;
    width: 100%;
    max-width: 760px;
`;

const ImgPreview = styled.img.attrs((props) => ({
    src: props.src,
}))`
    display: block;
    width: auto;
    height: 120px;
    margin: 40px 0;
`;

// REACT
const InputFile = ({ existingImg, onImageChange }) => {
    const { uploadImage } = useCellier();
    const [preview, setPreview] = useState(existingImg || "");
    const [isSubmitting, setIsSubmitting] = useState(false);

    // preview de l'image
    const previewImage = useCallback((file) => {
        if (file) {
            const blob = URL.createObjectURL(file);
            setPreview(blob);
        }
    });

    // upload de l'image
    const uploadBouteilleImg = async (image) => {
        setIsSubmitting(true);
        const { data } = await uploadImage(image);
        onImageChange(data.secure_url);
        setIsSubmitting(false);
    };

    return (
        <Container>
            {isSubmitting ? (
                <CircleLoader />
            ) : preview ? (
                <ImgPreview src={preview} alt="selected image" />
            ) : (
                <ImgPreview
                    src="https://res.cloudinary.com/vino-project/image/upload/v1639165462/bouteilleBlack_lz3rkm.png"
                    alt="Image par défaut"
                />
            )}
            <input
                type="file"
                onChange={({ target }) => {
                    previewImage(target.files[0]);
                    uploadBouteilleImg(target.files[0]);
                }}
            />
        </Container>
    );
};

// Les types de props attendus par le composant
InputFile.propTypes = {
    existingImg: PropTypes.string,
    onImageChange: PropTypes.func.isRequired,
};

export default InputFile;
