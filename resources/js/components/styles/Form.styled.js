import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    & > *:not(:first-child) {
        margin-top: 2rem;
    }
`;

export const Legend = styled.legend`
    color: #fff;
    font-size: 2rem;
    font-family: "Gotham Black";
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
`
