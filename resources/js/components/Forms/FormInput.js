import React from "react";
import { Input, Label } from "../styles/Input.styled";
import { FormGroup } from "../styles/FormGroup.styled";
import { InputErrorMessage } from "../styles/InputErrorMessage.styled";

const FormInput = ({
    type,
    name,
    value,
    onChange,
    onBlur,
    error,
    label,
    ...rest
}) => {
    return (
        <FormGroup>
            <Input
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            {label && <Label shrink={value?.length}>{label}</Label>}
            {error && <InputErrorMessage>{error}</InputErrorMessage>}
        </FormGroup>
    );
};

export default FormInput;
