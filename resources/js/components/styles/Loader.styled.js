import styled, { keyframes } from "styled-components";

// animation
export const FillUp = keyframes`
0% {
    transform: translateY(0) rotate(0deg);
}
100%{
    transform: translateY(-100%) rotate(450deg);
}
`;

export const Section = styled.section`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AnimationVin = styled.div`
    position: absolute;
    background: #58111a;
    height: 12rem;
    width: 5rem;
    top: -60px;
    right: -48px;
    border-radius: 55px 35% 40px 8px;
    transform: rotate(-5deg);
    z-index: 100;

    &:after {
        content: "";
        position: absolute;
        background: #fff;
        bottom: -50%;
        left: -50%;
        border-radius: 45%;
        height: 200%;
        width: 200%;
        animation: ${FillUp} 4s ease-in-out infinite;
    }
`;

export const Image = styled.img`
    max-height: 18rem;
    position: absolute;
    z-index: 111;
`;

export const Bouteille = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
`;
