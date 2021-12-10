import styled from 'styled-components'


export const BonttonModifierCountainer = styled.div`
    //background:yellow;
    display:flex;
    justify-content: space-evenly;
    margin-top:-20px;
    margin-left:-20px;
    
    >button{
        font-family: GothamBlack;
        cursor: pointer;
        color:#303031;
        text-align:center;
        width:25%;
        height: 40px;
        border: 1px solid #58111A; 
        border-radius: 2px;
        padding: 4px 20px 0px 20px;
        display:inline-block;
        line-height:10px;
        min-width:120px;
        :hover{
            background:#58111A;
            color:#fff;
        }
       
    }

    >button:first-child {
        color:#fff;
        background:#303031;
        :hover{
            background:#fff;
            color:#303031;
        }
    }
`