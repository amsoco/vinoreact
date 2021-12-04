import styled, { css } from "styled-components";

// les différent input 
export const Label = styled.label`
    font-size: 1rem;
    font-family: "GothamLightItalic";
    font-weight: 500;
    font-style: italic;
    position: absolute;
    pointer-events: none;
    left: 15px;
    top: 25px;
    color: black;
    transition: 200ms ease all;
    ${({ shrink }) =>
        shrink &&
        css`
            left: -4px;
            top: -14px;
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
    font-family: "GothamLightItalic";
    font-weight: 300;
    font-style: italic;
    padding-left: 10px;
    
    box-sizing: border-box;
    font-size: 0.833rem;
    outline: none;
    display: block;

    &:focus ~ ${Label} {
        left: 1px;
        top: -14px;
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
    //font-family: "GothamLightItalic";
    //font-weight: 500;
    font-style: italic;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 0.833rem;
    cursor: pointer;
    outline: none;
    
`

export const RechercheInput = styled.input`

    border-left:none;
    border-right:none;
    border-top : 1px solid  #D8D8D8;
    border-bottom : 1px solid  #D8D8D8;
    padding:15px 10px 15px 10px;
    margin-top: 40px;
    font-family: "GothamLightItalic";
   // font-weight: 500;
   // font-style: italic;
    line-height:1px;


`
