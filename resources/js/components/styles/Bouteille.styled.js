import styled from 'styled-components'


export const BouteilleSection = styled.section`
    font-family: "LincolnMillerBanner-Roman" ;
    margin-left:20px;
    margin-right:20px;

    img{
        max-height:80vh;

    }

    img:first-child {
        margin:auto;
        margin-top:40px;
        display:block
    }

    h3,
    h2 {

        text-align:center;
    }

    h2 {
        margin-top:40px;
    }

    h3 {
        margin-top:10px;
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