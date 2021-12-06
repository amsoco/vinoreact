import { createGlobalStyle } from 'styled-components';

import GothamBlackLink from '/fonts/GothamBlack.ttf';
import GothamLightItalic from '/fonts/GothamLightItalic.ttf';
import GothamMedium from '/fonts/GothamMedium.ttf';
import LincolnMillerBanner from '/fonts/LincolnMillerBanner.ttf';

export default createGlobalStyle`


    @font-face {
        font-family: 'GothamBlack';
        //src:local('GothamBlack'), 
        src: url('${GothamBlackLink}') format('truetype');
        font-weight:normal;
        font-style: normal;
        unicode-range: U+000-5FF; /* Download only latin glyphs */
    }

    @font-face {
        font-family: 'GothamLightItalic';
        //src: local('GothamLightItalic'), 
        src: url('${GothamLightItalic}') format('truetype');
        font-weight: 300;
        //font-style: normal;
        unicode-range: U+000-5FF; /* Download only latin glyphs */
    }

    @font-face {
        font-family: 'GothamMedium';
        //src: local('GothamMedium'), 
        src: url('${GothamMedium}') format('truetype');
        //font-weight: 300;
        font-style: medium;
        unicode-range: U+000-5FF; /* Download only latin glyphs */
    }

    @font-face {
        font-family: 'LincolnMillerBanner';
        //src: local('LincolnMillerBanner'),
        src: url('${LincolnMillerBanner}') format('truetype');
        font-weight: 200;
        font-style: normal;
        unicode-range: U+000-5FF; /* Download only latin glyphs */
    }
`;