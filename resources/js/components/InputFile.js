import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import axios from "axios";

// STYLED COMPONENTS
const ImgPreview = styled.img.attrs((props) => ({
    src: props.src,
}))`
    display: block;
    width: auto;
    height: 120px;
    margin: 20px 0;
`;

const ImgPlaceholder = styled.div`
    width: 120px;
    height: 120px;
`;

const ButtonUpload = styled.button`
    background: #303031 !important;
    color: #fff;
    padding: 2px 5px;
    margin-top: 20px;
    font-family: GothamBlack;
    cursor: pointer;

    &:hover {
        background: #fff !important;
        color: #303031;
        border-color: #303031;
    }
`;

const Label = styled.label`
    margin: 10px 0;
`;

// REACT
const InputFile = ({ existingImg, onImageChange }) => {
    const [imageSelected, setImageSelected] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [publicId, setPublicId] = useState("");
    const [preview, setPreview] = useState(existingImg || "");
    const [isSubmitting, setIsSubmitting] = useState(false);

    //nettoyer la précèdente image de preview (data uri) au chargement du composant
    // useEffect(() => {
    //     URL.revokeObjectURL(preview);
    // }, [preview]);

    // preview de l'image
    const previewImage = useCallback((file) => {
        if (file) {
            const blob = URL.createObjectURL(file);
            setPreview(blob);
        }
    });

    // upload de l'image
    const uploadImage = () => {
        setIsSubmitting(true);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "knxwwgoa");

        axios
            .post(
                "https://api.cloudinary.com/v1_1/vino-project/image/upload",
                formData
            )
            .then(({ data }) => {
                console.log('data', data)
                setImageUrl(data.secure_url);
                setPublicId(data.public_id);
                onImageChange(data.secure_url)
                setIsSubmitting(false);
            });
    };

    return (
        <>
            {preview && <Label>Image actuelle:</Label>}

            {preview ? (
                <ImgPreview src={preview} alt="selected image" />
            ) : (
                <ImgPlaceholder />
            )}

            <input
                type="file"
                onChange={(e) => {
                    setImageSelected(e.target.files[0]);
                    previewImage(e.target.files[0]);
                }}
            />

            <ButtonUpload onClick={uploadImage} disabled={isSubmitting}>UPLOADER IMAGE</ButtonUpload>
        </>
    );
};

// Les types de props attendus par le composant
InputFile.propTypes = {
    existingImg: PropTypes.string,
};

export default InputFile;
