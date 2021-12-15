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

    @media (max-width: 900px) {
        margin: 10px;
        &>div {
            div {
                width:95%;
            }
        }
    }


   >div {

        >ul,
        >div {
            margin:auto;
            //width:75%;
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

        &>div {
            min-width:600px;
        }

        @media (max-width: 900px) {

            &>div {
                min-width:300px;
                margin-top:20px;
                margin-left:10px;
            }

            &>input {
                margin-left:10px;
                margin-right:10px;
                width:300px
            }

            table, thead, tbody, th, td, tr { 
                display: block; 
            }
            
            /* Hide table headers (but not display: none;, for accessibility) */
            thead tr { 
                position: absolute;
                top: -9999px;
                left: -9999px;
            }
            
            tr { 
                border: 1px solid #ccc; 
                
            }
            
            td { 
                /* Behave  like a "row" */
                border: none;
                border-bottom: 1px solid #eee; 
                position: relative;
                padding-left: 50%;
                text-align: right; 
            }
            
            td:before { 
                /* Now like a table header */
                position: absolute;
                /* Top/left values mimic padding */
                top: 20px;
                left: 10px;
                width: 45%; 
                padding-right: 10px; 
                white-space: nowrap;
                text-align:left;
            }
            
            /*
            Label the data
            */
            td:nth-of-type(1):before { 
                content: "Nom"; 
            }
            td:nth-of-type(2):before { 
                content: "Courriel"; 
                
            }
            td:nth-of-type(3):before {
                 content: "Privilège"; 
            }
            td:nth-of-type(4):before { 
                content: "Action"; 
            }

            td>button {
                margin-top:10px;
            }

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
    padding-left:20px;

    >h4 {
        padding: 0px 20px;
        margin: 40px 0px;
    }

    &>a {
        color:#FFF; 
        padding: 15px 10px 5px 20px;
        cursor:pointer;
        font-size:1rem;
        display:block;

    }

    &>a:hover{
        background:#fff;
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

    @media (max-width: 930px) {
        display : none ;
    }

`
export const AdminAsidePetit = styled.aside`
    display : none ;

    @media (max-width: 930px) {
        display:flex;
        position:fixed;
        bottom:0;
        width:100%;
        background:#303031;
        height:60px;
        color:white;
        z-index:2;
        justify-content:space-between;
        padding:20px 30px 0px 30px ;


        &>a {
            margin-left:20px;
            line-height:18px;
            color:#FFF; 
            cursor:pointer;
            font-size:1rem;
            display:block;
        }
    }
`