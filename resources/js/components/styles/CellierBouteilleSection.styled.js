import styled from 'styled-components'

// la page cellier
export const CellierBouteilleSection = styled.section`

    margin:  0px 20px 0px 20px;
    border-top : 1px solid  #D8D8D8;
    padding: 20px 10px 20px 10px;
    
    p {
        margin: 20px 0px 0px 0px;
        font-size:1.44rem;
        font-family: LincolnMillerBanner;
        margin-left:auto;
    }

    &>div {
        display:flex;
    }
    &>div:last-child {

        div:last-child{
            margin-left:auto;
            align-self: flex-end; 
        }
    }

    &>div>h3:first-child {
        font-size:1.44rem;
        font-weight:200;
        max-width:75%;
        align-self: flex-end; 
    }


    &>div>a>img {
        height:120px;
        margin-top:30px;
    }

    &>div>div>p {
        font-size:16px;
        margin: 10px 0px 0px 0px;
        //line-height:0;
        text-align:right;
    }

    &>div>div>p:last-child {
        color:#58111A;
        font-family: Gotham Black;
        font-weight: 100;
        border: 2px solid #58111A;
        padding: 4px;
        font-size: 0.833rem;
        border-radius: 4px;
        width:fit-content;
        margin-left:auto;
        min-width:15px;
        text-align:center;
    }

`