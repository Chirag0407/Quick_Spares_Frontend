import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    :root{
        --dark-bg: #262626;
        --gray-1: #BCB4B4;
        --deep-dark: #1E1E1E;
        --gray-2: #363636;
        --white : white;
        --black: black;
    }
    html{
        font-size: 10px;
        font-family: 'Roboto Mono';
        background-color:#020250;
    }
    ul,li{
      list-style: none;
    }
    a{
     text-decoration: none;
    }
    img, svg{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    button{
      outline: none
    }
    .container {
      width: 100%;
    }
`;

export default GlobalStyles;
