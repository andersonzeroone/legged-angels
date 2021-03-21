import styled from 'styled-components';
import {shade} from 'polished';

import fundoSvg from '../../assets/fundo-page3.svg';
import signinBackgroundImg from '../../assets/sign-in-background.jpg';

export const  Container = styled.div`
  height:100vh;

  display:flex;
  align-items:stretch;
`

export const  Content = styled.div`
  flex:1;
  background:url(${fundoSvg}) no-repeat center;
  background-size:cover;

  display:flex;
  flex-direction:column;
  align-items:center;

  place-content:center;

  width:100%;
  max-width:700px;

  img{
    height:10rem;
  }

  form{
    margin:80px 0;
    width:340px;
    text-align:center;

    h1{
      margin-bottom:24px;
      color:#225E73;
      font-family:'Francois One', serif
    }

    a{
      color:#5390A6;
      display:block;
      margin-top:10px;
      text-decoration:none;
      transition: color 0.2s;

      &:hover{
        color:${shade(0.2, '#5390A6')}
      }
    }
  }

  > a{
      color:#5390A6;
      display:block;

      margin-top:10px;
      font-weight:bold;
      text-decoration:none;
      transition: color 0.2s;
      display:flex;

      svg{
        margin-right:5px;
      }

      &:hover{
        color:${shade(0.2, '#5390A6')}
      }
    }

`

export const  Background = styled.div`
  flex:1;
  background:url(${signinBackgroundImg}) no-repeat center;
  background-size:cover;
`
