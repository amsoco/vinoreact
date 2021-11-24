import styled from 'styled-components'


export const AccordeonSection = styled.section`
    display: flex;
    flex-direction: column;

    // pour bien voir 
    margin: 40px;


    button{
        background: #fff;
        border: 1px solid #D8D8D8;
        border-left: none;
        border-right: none;
        padding: 10px;
        display:flex;

        img {
            height : 12px;
            margin-left: auto;
            transition: transform 0.6s ease;
            margin-top: auto;
            margin-bottom: auto;
        }

        p {
            font-family: 'Gotham';
            font-weight: 900;
            font-style: normal;
            font-size:1.2rem;
        }
    }

`