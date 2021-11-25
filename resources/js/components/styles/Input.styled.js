import styled, { css } from 'styled-components'

export const Label = styled.label`
    font-size: 1rem;
    font-family: "Gotham Thin";
    font-weight: 500;
    font-style: italic;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 12px;
    color: black;
    transition: 200ms ease all;
    ${({ shrink }) =>
        shrink &&
        css`
            left: -4px;
            top: -18px;
            color: white;
            font-size: 0.8rem;
        `}
`;

export const Input = styled.input`
    width: 100%;
    max-width: 350px;
    height: 40px;
    background-color: #d8d8d8;
    border-radius: 3px;
    border: 1px solid #303031;
    font-family: "Gotham Thin";
    font-weight: 500;
    font-style: italic;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 0.833rem;
    outline: none;
    display:block;

    &:focus ~ ${Label} {
        left: 1px;
        top: -18px;
        color: #fff;
        font-size: 0.8rem;
    }
`;

export const Select = styled.select`
    width: 100%;
    max-width: 350px;
    height: 40px;
    background-color: #d8d8d8;
    border-radius: 3px;
    border: 1px solid #303031;
   // margin-top: 20px;
    font-family: "Gotham Thin";
    font-weight: 500;
    font-style: italic;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 0.833rem;
`;
