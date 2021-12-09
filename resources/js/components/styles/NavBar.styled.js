import styled from "styled-components";

//console.log(translateMenu);
// La navbar et le manu dynamique

export const NavBarCountainer = styled.header`

    //width:100%;
    position: sticky;
    top: 0;
    background:#fff;
    z-index:10;
    overflow-anchor: none;
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
                    transform: rotate(${({ rotate }) =>
                        rotate || "0"}) translate(-${({ translateDown }) =>
    translateDown || "0"} , ${({ translateDown }) => translateDown || "0"} );
                }

                div:nth-of-type(2){
                    transition: opacity 0.6s ease;
                    opacity: ${({ display }) => display || "100%"};
                }

                div:nth-of-type(3){
                    transition: transform 0.6s ease;
                    transform: rotate(${({ rotateNegative }) =>
                        rotateNegative || "0"}) translate(${({ translateUp }) =>
    translateUp || "0"} , ${({ translateUp }) => translateUp || "0"} );
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
            left:-400px;
            position:absolute;
           // overflow: auto;
            transition: transform 0.4s ease-out;
            background:#fff;
            height : ${({ menuHeight }) => menuHeight + "px" || "100vh"};
            max-width:400px;
            width:100%;
            box-sizing: border-box;
            transform:translate(${({ translateMenu }) =>
                translateMenu || "0"} );

            // ajustement obligatoire
            li {

                margin-left:10px;
                margin-right:10px;


            }

            li:nth-of-type(2){
                border-bottom: 1px solid #D8D8D8;
                margin-bottom:20px;
            }

            li:nth-of-type(3)>p{
                cursor: pointer;
                margin-left: 10px;
                border-bottom: 2px solid #303031;
                display: inline;
            }


            }
        }

        h4 {
            margin: 20px;
        }


`;
