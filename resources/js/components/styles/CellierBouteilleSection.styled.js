import styled from 'styled-components'

export const CellierBouteilleSection = styled.section`

    margin:  20px 20px 0px 20px;
    border-top : 1px solid  #D8D8D8;
    padding: 0px 10px 0px 10px;
    height: 220px;
    
    p {
        margin: 20px 0px 0px 0px;
        font-size:1.44rem;
        font-family: "LincolnMillerBanner-Roman";
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
    }


    &>div>img {
        height:120px;
        margin-top:20px;
    }

    &>div>div>p {
        font-size:16px;
        margin: 10px 0px 0px 0px;
        //line-height:0;
    }

`