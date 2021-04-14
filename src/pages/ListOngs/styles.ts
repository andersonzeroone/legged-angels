import { shade } from 'polished';
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

export const ButtonSearch = styled.button`
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



export const  ContainerModal = styled.div``;

export const HeaderModal = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

export const TitleModal = styled.p`
  color:#104B60;
  font-size:2.5rem;
  font-family:'Mulish', serif;
  font-weight:900;
`;

export const MainModal = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding:0 20px;
`;

export const TextModal = styled.p`
  color:#104B60;
  font-size:1.8rem;
  font-family:'Mulish', serif;
  margin-top:20px;
`;

export const FooterModal = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;

  margin:80px 0 70px;
`;

export const ButtonCloseModal = styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;

  background:#997308;
  height:45px;
  border-radius:10px;
  border:0;

  padding: 0 15px;

  height:40px;
  width:135px;

  color:#FFF;
  font-size:1.3rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#5390A6')};
  }

`;
