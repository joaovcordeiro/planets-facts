import { createGlobalStyle } from "styled-components";
import { background } from "./colors";

const GlobalStyle = createGlobalStyle`


h1 {
    font-family: 'Antonio', sans-serif;
    font-size: 80px;
    line-height: 103px;
    font-weight: 500;

}

h2 {
    font-family: 'Antonio', sans-serif;
    font-size: 40px;
    line-height: 52px;
    word-spacing: -1.5px;
    font-weight: 500;
    margin: 0;
}

h3 { 
    font-family: 'Antonio', sans-serif;

    font-size: 12px;
    line-height: 25px;
    letter-spacing: 2.6px;
    font-weight: bold;
}

h4 {
    font-family: 'League Spartan', sans-serif;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    font-weight: bold;
}

p {
    font-family: 'League Spartan', sans-serif;
    font-size: 14px;
    line-height: 25px;
}

body {
    background-color: ${background};
}
`;

export default GlobalStyle;
