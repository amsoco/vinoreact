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



`