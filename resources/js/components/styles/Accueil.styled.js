import styled from 'styled-components'


export const AccueilMain = styled.main`
    height: 100vh;
    overflow: hidden;
    display:flex;
    flex-direction: column;
    justify-content:center;
    position: relative;

    h2 {
        text-align: center;
        align-self:center;
        margin-left:40px;
        margin-right:40px;
        font-size: 1.728rem;
        font-weight: 300;
        font-family: 'Gotham Black';
        max-width:250px;
    }
    img:nth-of-type(1) {
        position:absolute;
        top:0px;
        transform: translate(0, -40%);
    }

    //bouteille
    img:nth-of-type(2) {
        max-width:50px;
        align-self:center;
        margin-top:20px;
    }

    // logo vino
        img:nth-of-type(3) {
        margin-top:20px;
        max-width:100px;
        min-widht:40px;
        align-self:center;
    }

    select{
        align-self:center;
        max-width:250px;
    }

    img:nth-of-type(4) {
        position:absolute;
        bottom:0px;
        transform: translate(-1%, 40%);
    }

    @media (min-width:760px){
        img:nth-of-type(1) {
            position:absolute;
            top:0px;
            transform: translate(0, -60%);
        }

        img:nth-of-type(4) {
            position:absolute;
            bottom:0px;
            transform: translate(-1%, 60%);
        }
      }
`