import styled from "styled-components";

export const NavBarCountainer = styled.nav`

    position: sticky;
    top: 0;
    display:flex;
    justify-content: space-between;
    padding:20px;
    box-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;
    background:#fff;
    z-index:1;

    div {
        display:flex;
        flex-direction: column;

        div {
            width:20px;
            background:#303031;
            height: 3px;
            margin:0.09375rem;
        }
    }

    img {
        max-height: 20px;
    }
`