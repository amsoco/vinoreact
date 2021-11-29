import { createGlobalStyle } from 'styled-components'

/*

Le rythme général est de 20px
30px
40px
60px
80px
120px 

font-size
---------------------------------------------

font-size: 2.488rem;
font-size: 2.074rem;
font-size: 1.728rem;
font-size: 1.44rem;
font-size:1.2rem;
font-size: 1rem;
font-size:0.833rem;


Font 
---------------------------------------------

font-family: "LincolnMillerBanner-Roman"

Texte Générique
font-family: 'Gotham Black';
font-weight: 500;
font-style: normal;

Placeholder
font-family: "Gotham Thin";
font-weight: 500;
font-style: italic;

Bouton
font-family: 'Gotham Black';
font-weight: 300;


Couleur
---------------------------------------------

Anthracite : #303031
Gris Doux : #D8D8D8 
Blanc : #FFF
Gris Image: #898989
Rouge Vin : #58111A

*/

const GlobalStyles = createGlobalStyle`
@import url('http://fonts.cdnfonts.com/css/gotham');
@import url(//db.onlinewebfonts.com/c/a6e1f9c1f231a9d282a89b950b66509d?family=LincolnMillerBanner-Roman);

  * {
    margin:0;
    padding:0;
  }

  body {
    font-family: 'Gotham Black';
    font-weight: 500;
    font-style: normal;
  }

  // rythme général
  h3,
  select {
    margin-top:20px;
  }

  a{
    font-family: 'Gotham Black';
    font-weight: 500;
    font-style: normal;
  }

  h1 {
    font-family: "LincolnMillerBanner-Roman";
    font-size: 2.488rem;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-family: "LincolnMillerBanner-Roman";
    font-size: 1.728rem;
  }

  h4 {
    font-size: 1.44rem;
  }

  h5 {
    font-size:1.2rem;
  }

 p {
    font-size: 1rem;
  }

  a,
  span {
    font-size:0.833rem;
  }

  li {
    list-style: none;
  }

`

export default GlobalStyles