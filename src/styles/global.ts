import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  body{

  }

  body,input,button{
    font-size:16px
  }

  h1,h2,h3,h4,strong{
    font-weight:500
  }

  button{
    cursor: pointer;
  }
`
