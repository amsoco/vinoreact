import styled from "styled-components";

export const NavBarCountainer = styled.header`
    
    //width:100%;
    position: sticky;
    top: 0;
    background:#fff;
    z-index:10;

        nav {
        
        display:flex;
        justify-content: space-between;
        padding:20px;
        box-shadow: rgba(0, 0, 0, 0.10) 1.95px 1.95px 2.6px;


            div {
                display:flex;
                flex-direction: column;
                cursor: pointer;


                div {
                    width:20px;
                    background:#303031;
                    height: 3px;
                    margin:0.09375rem;
                }

                div:first-child {
                    transition: transform 0.6s ease;
                    transform: rotate(${({ rotate }) => rotate || '0'}) translate(-${({ translateDown }) => translateDown || '0'} , ${({ translateDown }) => translateDown || '0'} );
                }
                
                div:nth-of-type(2){
                    transition: opacity 0.6s ease;
                    opacity: ${({ display }) => display || '100%'};
                }
                div:nth-of-type(3){
                    transition: transform 0.6s ease;
                    transform: rotate(${({ rotateNegative}) => rotateNegative|| '0'}) translate(${({ translateUp }) => translateUp || '0'} , ${({ translateUp }) => translateUp || '0'} );
                }

            }

            img {
                max-height: 20px;
            }

            img:last-child {
                cursor: pointer;
            }
        }

        ul {
            top:60px;
            position:fixed;
            overflow: hidden;
            transition: width 0.6s ease-out;
            background:#fff;
            height:100vh;
            max-width:800px;


            // ajustement obligatoire
            li {

                margin-left:10px;
                margin-right:10px;


                span {
                    cursor: pointer;
                    margin-right: 10px;
                    border-bottom: 2px solid #303031;
                }

                a:first-child {
                    text-decoration: none;
                }

                a {
                    margin-left:10px;
                    margin-right:40px;
                    color:#303031;
                }

                a:last-child{
                    margin-right:10px;
                    margin-left:auto;
                }

            }

            li:nth-of-type(7){
                display:flex;
                justify-content:space-between;
                margin-top:20px;
            }


            li:nth-of-type(8){

                button{
                    margin: 20px auto 0px auto;
               }

            }
        }

        &>button {
            margin:20px
        }


`