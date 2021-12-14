import styled from "styled-components";

// Layout commun aux pages de Login et Register
export const AddCelLayout = styled.main`
    //width: 320px;
    height: 260px;
    background-color: #fff;
    border: 1px solid #303030;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5vw;
    border-radius: 4px;
    margin-left:-20px;
    Button {
        color: #fff;
        display:block;
        //justify-content: center;
        text-align:center;
        padding:10px;
        margin-top:20px;
        background:#303031;
        :hover {
            border:1px solid #303031;
        }
    }

    >form>legend {
        margin-bottom:20px;
        color:#303031;
    }

    >form>div span {
        margin: 0.8rem 0 0 0.1rem;
    }

`;

