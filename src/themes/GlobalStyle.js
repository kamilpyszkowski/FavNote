import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    input, select, button, textarea, a {
        border: initial;
        background: initial;
        font-family: inherit;
        color: inherit;
        text-decoration: none;
    }

    ul, ol {
        list-style: none;
    }

    img {
        max-width: 100%;
        max-height: 100%;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font: 300 1.6rem "Montserrat", sans-serif;
    }
`;

export default globalStyle;
