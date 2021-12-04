import { createGlobalStyle } from 'styled-components';

import GothamBlack from './GothamBlack2.ttf';
import GothamLightItalic from './GothamLightItalic.ttf';
import GothamMedium from './GothamMedium.ttf';
import LincolnMillerBanner from './LincolnMillerBanner.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'GothamBlack';
        src: local('GothamBlack'), local('GothamBlack'),
        url(${GothamBlack}) format('truetype'),
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'GothamBlack500';
        src: local('GothamBlack'), local('GothamBlack'),
        url(${GothamBlack}) format('truetype'),
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'GothamLightItalic';
        src: local('GothamLightItalic'), local('GothamLightItalic'),
        url(${GothamLightItalic}) format('truetype');
        font-weight: 300;
        //font-style: normal;
    }

    @font-face {
        font-family: 'GothamMedium';
        src: local('GothamMedium'), local('GothamMedium'),
        url(${GothamMedium}) format('truetype');
        //font-weight: 300;
        font-style: medium;
    }

    @font-face {
        font-family: 'LincolnMillerBanner';
        src: local('LincolnMillerBanner'), local('LincolnMillerBanner'),
        url(${LincolnMillerBanner}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
`;