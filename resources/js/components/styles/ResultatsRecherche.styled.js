import styled from "styled-components";

export const ResultatsRecherche = styled.section`
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
`;

export const Resultat = styled.article`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    padding: 1.5rem;
    border-bottom: 1px solid #d8d8d8;
    cursor: pointer;

    h2 {
        grid-column: 1 / -1;
        font-size: 1.44rem;
        font-family: "LincolnMillerBanner-Roman";
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
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;

    img {
        width: 80%;
        display: block;
    }

    h2 {
        font-size: 2rem;
        font-family: "LincolnMillerBanner-Roman";
        text-align: center;
    }

    p {
        text-align: center;
    }
`;

export const DetailBouteille = styled.div`
    width: 100%;
    max-width: 600px;

    p {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem 0;
    }
`;
