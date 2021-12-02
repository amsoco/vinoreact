import React, {useState} from "react";
//import { InputContainer } from "./styles/InputContainer.styled";
import Axios from 'axios';
import {Image} from 'cloudinary-react';


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
                style={{ width: 100 }}
                cloudName="vino-project"
                publicId={publicId}/>
            </div>
    )

    }


export default Input;
