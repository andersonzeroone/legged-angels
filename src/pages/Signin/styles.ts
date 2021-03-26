import styled, {keyframes}from 'styled-components';
import {shade} from 'polished';
import {Link} from 'react-router-dom';

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

`;

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform:translateX(-80px);
  }to{
    opacity:1;
    transform:translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  place-content:center;

  animation:${appearFromLeft} 1s;

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
      font-family:'Francois One', serif;
      /* margin-top:-10%; */
    }

  }

  > a{
      color:#5390A6;
      display:block;

      margin-top:-40px;
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
`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  padding:10px 20px;
  margin-top:-20px;
`;

export const ForgotPassword = styled(Link)`
  color:#5390A6;
  display:block;
  text-decoration:none;
  transition: color 0.2s;

  &:hover{
    color:${shade(0.2, '#5390A6')}
  }
`;

export const ButtonBack = styled(Link)`
    display: flex;
    justify-content:center;
    /* align-items:center; */
    text-decoration:none;
    border-radius:12px;
    border:2px solid #CC9E1F;
    padding:4px 10px;
`;

export const  Background = styled.div`
  flex:1;
  background:url(${signinBackgroundImg}) no-repeat center;
  background-size:cover;
`
