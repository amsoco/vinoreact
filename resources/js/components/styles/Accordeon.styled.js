import styled from 'styled-components'


//console.log(height)

export const AccordeonSection = styled.section`
    display: flex;
    flex-direction: column;

    // pour bien voir 
   // margin-left: 20px;
   // margin-right: 20px;

    div {
        overflow: hidden;
        transition: height 0.6s ease-out;

            p  {
            padding: 20px;
            font-family: 'Gotham';

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
        line-height:0;

        img {
            height : 12px;
            margin-left: auto;
            transition: transform 0.6s ease;
            margin-bottom: auto;
            margin-top:auto;
            transform: rotate(${({ rotate }) => rotate || '0'});
        }

        p {
            font-family: 'Gotham';
            font-weight: 900;
            font-style: normal;
            font-size:1.2rem;
        }
    }

`