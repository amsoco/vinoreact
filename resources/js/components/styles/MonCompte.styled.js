import styled from "styled-components";

export const MonCompteCountainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    //margin-top: 60px; pas certain ici PAG
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    h4 {
        margin-top: 40px;
        padding: 15px 15px 15px 10px;
    }
    & > button {
        margin-top: 40px;
    }

    div > section:last-of-type div > div {
        max-width: 800px;
        background: bleu;
    }
`;
