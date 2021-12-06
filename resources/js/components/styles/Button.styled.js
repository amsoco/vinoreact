import styled from 'styled-components'


export const Button = styled.button`
  border-radius: 2px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  height: 40px;
  width: 100%;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  font-family: Gotham Black;
  width:100%;
  max-width: 850px;
  font-size: 1.2rem;
  font-weight: 300;
  border: 1px solid ${({ borderColor }) => borderColor || '#303031'};
  display:block;
 // margin-top:20px;
  &:hover {
    background-color: ${({ bgHover }) => bgHover || '#58111A'};
    color: ${({ colorHover }) => colorHover || '#FFF'};
    transform: scale(0.99);
  }
`
// le bouton pour retourner haut de la page dans les longs celliers
export const ButtonBackUp = styled.div`
  border-radius: 2px;
  cursor: pointer;
  height: 40px;
  width: 40px;
  background: #58111A;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px;
  color: #fff;
  display:block;
  //margin-top:20px;
  position:fixed;
  bottom: 120px;
  //right:10%;
  margin-left:auto;

 

  img {
    position: absolute;
    top: 20%;
    left: 10%;
  }
  
`