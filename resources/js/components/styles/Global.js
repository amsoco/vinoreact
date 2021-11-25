import { createGlobalStyle } from 'styled-components'

/*




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
    font-size: 2.488rem;
  }

  h2 {
    font-size: 2.074rem;
  }

  h3 {
    font-size: 2.488rem;
  }

  h4 {
    font-size: 1.728rem;
  }

  h5 {
    font-size: 1.44rem;
  }

  a,
  h6 {
    font-size: 1rem;
  }

  span,
  p {
    font-size:0.833rem;
  }

  

`

export default GlobalStyles