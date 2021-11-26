import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    margin: 0 20px 0 20px;
    & > *:not(:first-child) {
        margin-top: 30px;
    }
`;

export const Legend = styled.legend`
    color: #fff;
    font-size:  2.488rem;
    font-family: "Gotham Black";
    //margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    line-height:0;
`
