import React from "react";
import { HolderContainer } from "./styles/Holder.styled";

const Holder = (props) => {
    return (
        <HolderContainer>
            <p>{props.value}</p>
        </HolderContainer>
    );
};

export default Holder;
