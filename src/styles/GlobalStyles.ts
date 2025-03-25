import {createGlobalStyle} from "styled-components";


export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        font-family: 'Montserrat', sans-serif;
    }
`;
