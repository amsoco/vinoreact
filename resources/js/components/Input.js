import React, {useState} from "react";
//import { InputContainer } from "./styles/InputContainer.styled";
import Axios from 'axios';
import {Image} from 'cloudinary-react';
import {Transformation} from 'cloudinary-react';

// upload d'image sur cloudinary
const Input = () => {
    const [imageSelected, setImageSelected] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [publicId, setPublicId] = useState("");

    const uploadImage = (files) => {
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "knxwwgoa");

        Axios.post("https://api.cloudinary.com/v1_1/vino-project/image/upload", 
            formData).then((response)=>{
                setImageUrl(response.data.secure_url);
                setPublicId(response.data.public_id);
            });
    };

    return (
            <div>
                <input type="file" onChange={(e)=> {
                     setImageSelected(e.target.files[0])}}/>
                <button onClick={uploadImage}>Téléverser l'image</button>

                <Image 
                cloudName="vino-project"
                publicId={publicId}
                imageUrl={imageUrl} >
                    <Transformation width="80" height="120" crop="fill"/>
                </Image>
            </div>
    )

}


export default Input;


