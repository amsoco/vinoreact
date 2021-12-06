import styled from 'styled-components'


export const AccordeonSection = styled.section`
    display: flex;
    flex-direction: column;

    div {
        overflow: hidden;
        transition: height 0.4s ease-out;

            p  {
            padding: 20px;
            font-family: GothamMedium;
        }
    }

    button{
        background: #fff;
        border-top: 1px solid #D8D8D8;
        border-left: none;
        border-right: none;
        border-bottom: none;
        padding: 10px;
        padding-top:15px;
        padding-bottom:15px;
        display:flex;


        img {
            height : 12px;
            margin-left: auto;
            transition: transform 0.4s ease;
            margin-bottom: auto;
            margin-top:auto;
            transform: rotate(${({ rotate }) => rotate || '0'});

        }

        p {
            font-family: GothamMedium;
            font-weight: 900;
            font-style: normal;
            font-size:1.2rem;
            padding-top:15px;
        }
    }

`