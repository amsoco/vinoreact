import styled from "styled-components";

export const ResultatsRecherche = styled.section`
    font-family: LincolnMillerBanner;
    margin-left: 20px;
    margin-right: 20px;
`;

export const Resultat = styled.article`
    width: 100%;
    font-family: LincolnMillerBanner;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 1.5rem;
    border-bottom: 1px solid #d8d8d8;
    cursor: pointer;

    h2 {
        grid-column: 1 / -1;
        justify-self: start;
        font-size: 1.44rem;
        font-weight: 200;
    }

    img {
        max-height: 150px;
        grid-column: 1 / 2;
    }

    div {
        grid-column: 2 / 3;
        row-gap: 10px;
        align-self: end;
        justify-self: end;
        font-family: LincolnMillerBanner-Roman;
        font-weight: 100;

        p {
            margin-top: 10px;
            text-align: right;
        }
    }
`;

export const RechercheVins = styled.section`
    width: 100%;
    font-family: LincolnMillerBanner;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

    h2 {
        margin: 40px 0;
        text-align: center;
    }

    button {
        max-width: 90%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const BouteilleSelectionnee = styled.article`
    width: 100%;
    font-family: LincolnMillerBanner;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    padding-left:20px;
    padding-right:20px;

    img {
        margin-top:40px;
        max-height: 70vh;
        display: block;
    }

    h2 {
        text-align:center;
        margin-top: 40px;
        margin-bottom: 10px;
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
    }


    button:last-of-type {
        margin-top:20px;
    }


`;

export const DetailBouteille = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display:flex;
    flex-direction: column;

    >div {
        display:flex;
        width:100%;   
        justify-content:space-between; 
     }
    >div>div:last-of-type p {
        text-align: right;
    }
    p {
        padding-top: 10px;
    }

    p:last-of-type {
        margin-bottom:10px;
    }

    p:first-of-type {
        margin-top:20px;
    }
`;
