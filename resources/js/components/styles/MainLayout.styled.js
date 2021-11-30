import styled from "styled-components";

const MainLayout = styled.main`
    min-height: calc(100vh - 180px); // temporaire
    max-width: 800px;
   // margin-top: 60px; pas certain ici PAG
    margin-left: auto;
    margin-right: auto;
    margin-top:40px;


    &>div>h3,
    h1 {
        text-align:center;
    }
    h3 {
        margin-top: 5px;
    }

    h1 {
        margin-top: 40px;
    }

    section:nth-of-type(1) {
        border-top:none;
        margin-top: 30px;
    }

`;

export default MainLayout;
