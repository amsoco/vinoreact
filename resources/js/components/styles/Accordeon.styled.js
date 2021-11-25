import styled from 'styled-components'


//console.log(height)

export const AccordeonSection = styled.section`
    display: flex;
    flex-direction: column;

    // pour bien voir 
    margin-top:-1px;
    margin-left: 40px;
    margin-right: 40px;

    div {
        //height:${({ height }) => height || '0'} ;
       // max-height:0;
        overflow: hidden;
        transition: max-height 0.6s ease-in;
        //transition: transform 0.4s ease;
        //transform: scaleY(${({ scaleY }) => scaleY || '0'});
        //transform-origin: top;

        p  {
            padding: 20px;
            font-family: 'Gotham';
        }
    }

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