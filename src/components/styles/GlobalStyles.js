import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fffefe;
        background-color: #12184b;
    }
    body{
        min-height: 100vh;
        @media screen and (min-width:800px) {
            overflow: hidden;
        }
    }
`