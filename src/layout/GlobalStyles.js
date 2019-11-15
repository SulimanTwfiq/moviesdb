import { createGlobalStyle } from "styled-components"
import "../fonts/fonts.css"
import media from "./media"

const GlobalStyle = createGlobalStyle`
:root {
    --color-primary: #EAF6E4;
    --color-secoundary: #1E547B;
  }

  html,
  body {
    font-family: 'News Cycle', sans-serif;
    text-align:center;
    color: var(--color-secoundary);
    font-size:25px;
    background-color: #e8e8e8;
    -webkit-tap-highlight-color: transparent; 
    line-height:1;
    ${media.tablet`
        font-size:27px;

    `}
    a:visited,a:link{
      color: var(--color-primary);
  text-decoration:none;
}

textarea:required,input:required {
    box-shadow: none;
}
*{
outline: none;

}


  }


 
`

export default GlobalStyle
