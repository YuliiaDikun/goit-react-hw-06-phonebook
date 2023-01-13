import PoppinsWoff from './poppins/poppins-v20-latin-regular.woff';
import PoppinsWoff2 from './poppins/poppins-v20-latin-regular.woff2';
import { createGlobalStyle } from 'styled-components';

export const GlobalFontComponent = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'),
        url(${PoppinsWoff2}) format('woff2'),
        url(${PoppinsWoff}) format('woff');
        font-weight: 400;
        font-style: normal;
}
`;
