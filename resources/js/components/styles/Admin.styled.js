import styled from "styled-components";

export const AdminMain = styled.main` 
    color: #303031;
    background:#f8f8f8;
    display: flex;
    justify-content:space-between;
    font-family:GothamMedium;
    align-items:stretch;

    >div {

        flex-grow:2;
        display: flex;
        flex-direction:column;
    }
`


export const AdminNav = styled.nav`
    height: 60px;
    display:flex;
    justify-content: space-between;
    padding-left:20px;
    padding-right:20px;

    >p {
        cursor:pointer;
    }

    >p:hover {
        color:#3d3d3e;
    }


    >h4, 
    >p {
        line-height: 38px;
        align-self:flex-end;
        height:20px;
    }
`
export const AdminSection = styled.section`
    font-family:GothamMedium;
    flex-grow:2;
    margin: 60px;
   // border: 1px solid #202020;



   >div {

        >ul,
        >div {
            margin:auto;
            width:75%;
        }
        >div {
            display:flex;
            justify-content:space-between;
        }
    
        >h4 {
            text-align:center;
        }
        >input {
            display:block;
            margin:auto;
            margin-top:20px;
            width:75%;
            //background: #f8f8f8;
            border:none;
            padding: 10px;
            border-bottom: 1px solid #303031;
            font-style: italic;
            min-width:240px;
            margin-bottom:20px;
        }

        >ul {
            margin-top :40px;
            li {
                padding-top:10px;
            }
        }

        button {
            margin-left:10px;
        }

 

   }
   
   
`

export const AdminAside = styled.aside`
    width: 260px;
    min-width:200px;
    height: 100vh;
    background:#303031;
    color:#fff;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    >h4 {
        padding: 0px 20px;
        margin: 40px 0px;
    }


    >p {
        line-height:20px;
        padding: 15px 0px 5px 20px;
        cursor:pointer;
    } 

    >p:hover {
        background:#49494b;
        //transform:scale(1.01);
        //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    >div{
        height: 60px;
        display:flex;
        flex-direction: row;
        padding: 0px 20px;
        img {
            height:30px;
            align-self:flex-end;
        }
    } 

    @media (max-width: 550px) {
        position:absolute;
        left:-300px;

    }

`