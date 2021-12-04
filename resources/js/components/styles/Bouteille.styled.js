import styled from 'styled-components'


// la section des bouteilles du celliers
export const BouteilleSection = styled.section`
    font-family: "LincolnMillerBanner" ;
    margin-left:20px;
    margin-right:20px;

    img{
        max-height:70vh;

    }

    img:first-child {
        margin:auto;
        margin-top:60px;
        display:block; 
        //max-height:600px;  semble créer un bug
    }

    h3,
    h2 {

        text-align:center;
    }

    h2 {
        margin-top:40px;
        max-width:420px;
        margin-Left:auto;
        margin-right:auto;
    }

    &>button,
    &>div {
        margin-top:20px;
        margin-left:auto;
        margin-right:auto;
    }

    &>button:nth-of-type(1){
        margin-top:40px;
        
    }

    section {
        display:flex;
        justify-content: space-between;
    }

    section>div:nth-of-type(2) {
        text-align:right;
    }

    section>div p{
        margin-top 10px;
    }
    
`