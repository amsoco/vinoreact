import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const StyledLink = styled(Link)`
    //font-family: Gotham Thin;
    //font-size: 0.9rem;
    color: #fff;
`;

export const CustomLink = ({ children, to }) => {
    return <StyledLink to={to}>{children}</StyledLink>;
};

CustomLink.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string.isRequired,
};
