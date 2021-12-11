import React from "react";
import styled from "styled-components";
import { EditionAjoutInput } from "../../styles/Input.styled";

const Container = styled.div`
    width: 100%;
    position: relative;
`;

const ErrorMessage = styled.span`
    width: fit-content;
    font-weight: 300;
    color: red;
    /* margin: 0.3rem 0 0 0.1rem; */
    position: absolute;
    top: 50%;
    right: 10%;
    font-family: GothamBlack;
`;

const EditionAjoutFormInput = ({
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
    placeholder,
    ...rest
}) => {
    return (
        <Container>
            <EditionAjoutInput
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Container>
    );
};

export default EditionAjoutFormInput;
