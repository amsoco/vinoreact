import styled from "styled-components";


// organisation layout principale
const MainLayout = styled.main`
    min-height: calc(100vh - 180px); // temporaire
    max-width: 800px;
    //margin-top: 60px; pas certain ici PAG
    margin-left: auto;
    margin-right: auto;
    margin-top:20px;
    width:100%;

    &>div:nth-of-type(1) {
        margin-left:20px;
    }


    &>div>h3,
    h1 {
        text-align:center;
    }
    h3 {
        margin-top: 10px;
    }

    h1 {
        margin-top: 60px;
    }

    section:nth-of-type(1) {
        border-top:none;
        margin-top: 30px;
    }

    &>div:last-child {
        margin-left: 85%;
    }

    input {
        max-width:760px;
        margin-left:auto;
        margin-right:auto;
        width:85%;
        display:block;
    }

    // ici problème css a régler (input ne strech pas comme le reste)
    @media (min-width: 760px) {
        input {
            width:90%;

        }
    }

`;

export default MainLayout;
