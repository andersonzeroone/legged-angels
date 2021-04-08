import { shade } from 'polished';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  background: #FDFDFF;
  padding:0 25px ;
`;

export const ContainerSlide  = styled.div`
  margin-top:30px;
  height:400px;
  width:100%;
`;

export const ImageDog  = styled.img`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  border-radius:20px;
  width:100%;
  height:100%;
`;

export const ContentSlide  = styled.div`
  position:absolute;
  width:50%;
  margin-top:-200px;
  padding:25px;
`;

export const TextSlide  = styled.h1`
  color:#fff;
`;

export const Title  = styled.h1`
  margin-top:40px;
  font-size:4rem;
  margin-bottom:40px;
  font-family:'Francois One', serif;
`;

export const ContainerFilter = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  padding:0 20px;
  margin:20px 0 80px;
`;

export const ButtonSearch = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  text-decoration:none;

  font-size:1.2rem;

  background:#FEA21D;
  height:55px;
  border-radius:20px;
  border:0;
  padding: 0 10px;
  width:100%;
  color:#FFF;
  font-weight:bold;
  transition: background-color 0.2s;
  box-shadow: 0px 4px 4px 1px rgb(141, 140, 140);

  &:hover{
    background:${shade(0.2,'#FEA21D')};
  }

`;

export const ContainerCards = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  flex-wrap:wrap;
  width:100%;
  padding:10px 35px;
`;

export const ContainerPagination = styled.div``;
