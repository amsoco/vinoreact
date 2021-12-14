import styled from "styled-components";


export const AjoutModifUsager = styled.form`
    width:100%;
    margin:auto;
    position:relative;
    margin-top:10px;
`


export const Countainer = styled.section`
    width:75%;
    margin:auto;
    min-width:300px;
   

    &>form>div>input::placeholder {
        color: #303031;
        font-style:normal;
      }

    &>form>div:nth-of-type(5){
        border-bottom:1px solid #d8d8d8;
    }

    &>form>button {
        margin-top :20px;
    }
`