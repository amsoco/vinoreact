import styled from "styled-components";

export const LoaderSection = styled.section`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .wine-bottle {
            position: absolute;
            background: #58111a;
            height: 12rem;
            width: 5rem;
            top: -60px;
            right: -48px;
            border-radius: 55px 35% 40px 8px;
            transform: rotate(-5deg);
        }
        img {
            position: absolute;
            height: 18rem;
        }
        .wine-bottle::after {
            content: "";
            position: absolute;
            background: #f8f8f8;
            bottom: -50%;
            left: -50%;
            height: 200%;
            width: 200%;
            border-radius: 45%;
            animation: spin 6s ease-in-out infinite;
        }
        @keyframes spin {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(-100%) rotate(500deg);
            }
        }
    }
`;
