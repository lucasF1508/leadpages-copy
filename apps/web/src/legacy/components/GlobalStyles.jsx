import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Apercu Pro';
    font-size: 16px;
    line-height: 1.47059;
  }

  h1, h2, h3, h4, h5, h6, button {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .lp-bar__iframe-wrapper {
    z-index: 150;
  }

  @media (min-width: 768px) {
    .lp-bar__iframe-wrapper {
      position: relative;
    }
    .lp-bar__pusher {
      height: 0;
    }
  }

  .gatsby-image-wrapper-constrained {
    display: block;
  }
`;

export default GlobalStyles;
