import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  * {
   scroll-behavior: smooth;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;
  }
  html {
    @media (max-width: 1440px) {
      font-size: 93.75%;
    }

     scroll-behavior: smooth;

    #nprogress .bar {
      background: #FB8840;
      height: 3px;
    }

    #nprogress .spinner-icon {
    border-top-color: #FB8840;
    border-left-color: #FB8840;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #FEE1CF;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #FB8840;
    border-radius: 10px;
  }
  }
  label{
    font-family: ${({ theme }) => theme.fonts.area};
    font-weight: 400;
  }
  button {
    font-family: ${({ theme }) => theme.fonts.area};
    cursor: pointer;
  }
  body {
    height: 100vh;
    font-family: ${({ theme }) => theme.fonts.area};
    font-weight: 400;
    text-rendering: optimizeLegibility;
    background-color: #221f1f;
    color: ${({ theme }) => theme.colors.black};
  }

`;
