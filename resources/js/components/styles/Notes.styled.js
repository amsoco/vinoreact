import styled from 'styled-components'


export const NotesCountainer = styled.section`
    margin-top:0;
    padding:0;
    position:relative;
    height:80px;
    &>div {
    


    
        span {
            position:absolute;
                img{
                    height:40px;
                padding-right:10px;
            }
        }

        span:first-child{
            top:7px;
            left:2px;
            img {
                
                width:24px;
                opacity:75%;
                margin-right:5px;
            }
        }


    }

    & button {
        border-top: none;
        padding:0;
        border-bottom:1px solid #303031;
        cursor: pointer;
        margin-top:23px;
        margin-right:10px;
    }



`