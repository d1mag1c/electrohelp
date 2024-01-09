import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: black;
        font-family: BalsamiqSans, 'sans-serif';
    }

    li {
        list-style: none;
    }

    button {
        border: none;
        cursor: pointer;
    }
    
    a {
        cursor: pointer;
        text-decoration: none;
        color: black;

        &:hover {
            color: #ffc400;
        }
    }

    body {
        transition: 0.5s;
        background: whitesmoke;


    }


`