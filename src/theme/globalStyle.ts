import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      min-width: 530px;
      margin: 0;
      font-family: "Inter", sans-serif;
      background-color: ${(props) => props.theme.colors.bgc};
      color: ${(props) => props.theme.colors.textColor};
    }
/* 
    button, input {
      border: 1px solid transparent;
      outline: 0;
      font-family: inherit;
    } */

    a {
      text-decoration: none;
      color: inherit;

      &:hover {
        text-decoration: underline;
      }

      &:visited {
        color: ${(props) => props.theme.colors.textColor};
      }
    }

     .container {
      /* padding: 0 calc(12vw - 35px); */
      /* margin-top: calc(4.4vw + 62px); */
    } 

    ._no-select {
      user-select: none;
    }

    button {
      cursor: pointer;
      padding: 12px 15px;
      font-size: inherit;
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.primeColor};
      color: white;
      transition: 200ms;

      &:disabled {
        background-color: ${(props) => props.theme.colors.disabledBgc};
      }

      &:hover {
        translate: 0 -5px;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
      }

      &:active {
        transition: 100ms;
        translate: 0 0;
        box-shadow: none;
      }
    }

    /* input {
      padding: 12px 15px;
      background-color: ${(props) => props.theme.colors.bgc};
      border-radius: 10px;
      border: 1px solid transparent;

      transition: 200ms;

      &:hover, &:focus {
        border-color: ${(props) => props.theme.colors.primeColor};
      }
    } */

    


    /* @media (max-width: 730px) {
      input, button {
        padding: 10px 12px;
      }
    } */
  `;

