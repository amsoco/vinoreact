import styled from 'styled-components'

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 350px;
    margin: 0 20px 0 20px;
    position:relative;
    & > *:not(:first-child) {
        margin-top: 30px;

    }

    a {
        color:#fff;
        border-bottom: 2px solid #fff;
    }
`

export const Legend = styled.legend`
    color: #fff;
    font-size:  2.488rem;
    font-family: GothamBlack;
    //margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

`


export const Legend2 = styled.legend`
    color: #fff;
    font-size:  1.728rem;
    font-family: GothamBlack;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: auto;
   `


export const LegendDark = styled.legend`
    color: #000;
    font-size:  1.728rem;
    font-family: GothamBlack;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    margin: 40px 0;
`