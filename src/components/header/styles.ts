import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const ContainerHeader = styled.nav`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;

  width:100%;
  padding:0 20px 10px;

  margin-top:15px;
  border-bottom:1px solid #5390A6;
`;

export const ContainerButtonNav = styled.ul`
  text-decoration:none;
  display:flex;
  flex-direction:row;
  list-style:none;

  width:430px;
  /* background: #000; */
`;


export const ContainerMenu = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-end;
  width:60%;
`;

export const ButtonNav = styled.li``;

export const Links = styled(Link)`
  display:flex;
  flex-direction:row;
  text-decoration:none;
  margin-right:5px;

  font-size:1.2rem;
  margin-right:15px;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;

`;

export  const IconButtonNav = styled.img`
  height:22px;
  width:22px;
  margin-right:8px;
`;

export const ButtonSignIn = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  text-decoration:none;

  border-radius:10px;
  border:3px solid #FFD04D;
  background:#FFFFFF;
  color:#5390A6;

  height:35px;
  width:130px;
  margin:0 20px 0;

  font-weight:bold;
  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#FFFFFF')};
  }

`;

export const ButtonSignUp = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  text-decoration:none;

  background:#FFD04D;
  height:35px;
  border-radius:10px;
  border:0;
  padding: 0 10px;
  width:150px;
  color:#FFF;
  font-weight:bold;
  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#FFD04D')};
  }

`;

export const ContainerImageNameUser = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;


`;

export const ImageUser = styled.img`
  height:40px;
  width:40px;
  border:1px solid #000;
  border-radius:20px;
  margin:0 10px;
  background: #000;
`;

export const ContainerName = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

export const NameUser = styled.p`
  font-size:1.2rem;
  margin-right:15px;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const ContainerSignOut = styled.button`
  background: none;
  border:0;

  display:flex;
  flex-direction:row;
  align-items:center;

  font-size:1.1rem;
  margin-right:15px;
  color:red;
  font-family:'Mulish', serif;
  font-weight:bold;
`;




