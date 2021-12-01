import React, {useState} from "react";
//import { InputContainer } from "./styles/InputContainer.styled";
import Axios from 'axios';
import {Image} from 'cloudinary-react';


const Input = () => {
    const [imageSelected, setImageSelected] = useState("");

    const uploadImage = (files) => {
        //console.log(files[0]);
        const formData = new FormData();
        formData.append("file", imageSelected);
        formData.append("upload_preset", "knxwwgoa");

        Axios.post("https://api.cloudinary.com/v1_1/vino-project/image/upload", 
            formData).then((response)=>{
                console.log(response);
                console.log(response.data.secure_url);
                
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
                publicId="https://res.cloudinary.com/vino-project/image/upload/v1638310543/apaylzy0oeacsysjw27j.png"/>
            </div>
    )

    }


export default Input;
