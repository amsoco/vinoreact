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
    }

    img {
        max-height: 150px;
        grid-column: 1 / 2;
    }

    div {
        grid-column: 2 / 3;
        align-self: end;
        justify-self: end;
        font-family: GothamBlack;
        font-weight: 100;
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

    img {
        max-height: 70vh;
        display: block;
    }

    h2 {
        margin: 40px 0;
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
    }

    p {
        text-align: center;
    }
`;

export const DetailBouteille = styled.div`
    width: 100%;
    margin-bottom: 40px;

    p {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;
    }
`;
