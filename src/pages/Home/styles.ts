import styled from 'styled-components';
import fundoSvg from '../../assets/fundo-page3.svg';
import { shade } from 'polished';

export const ConatinerMain = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100vw;
`;

export const Container = styled.div`
  flex:1;
  background:url(${fundoSvg}) no-repeat center;
  background-size:cover;
  display:flex;

  flex-direction:column;
  align-items:flex-start;
  padding:0 25px 100px;
  height:100vh;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:20px 0;

  width:100%;
`;

export const ContainerMotivation = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  width:50%;
`;

export const ContainerImage = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:50%;
`;

export const Title = styled.h1`
  font-size:3rem;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;

  margin-bottom:20px;

`;

export const SubTitle = styled.p`
  font-size:2rem;
  margin-bottom:40px;
  color:#5390A6;
  font-family:'Mulish', serif;
`;

export const ImageMotivation = styled.img`
  height:400px;
`;

export const TextSearchPet = styled.h1`
  font-size:2.2rem;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;

  margin-bottom:20px;
`;

export const ContainerSearch = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  padding:0 30px;

  width:100%;

`;

export const ContainerSelectFilterSearch = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:55%;
  border-radius:10px;
  border:4px solid #FFD04D;
  background: #FFD04D;
  /* border-color:#FFD04D; */


`;

export const ButtonSearch  = styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

  background:#CC9E1F;
  height:52px;
  border-radius:10px;
  border:0;
  border-color:#FFF;
  padding: 0 10px;
  width:550px;
  font-size:1.5rem;
  color:#FFF;
  font-weight:bold;
  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#CC9E1F')};
  }

`;

export const ContainerDivisor =styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;

  margin:5% 0;
`;

export const Divisor = styled.img``;

export const ContainerLostPet = styled.div`
  margin-top:80px;
  width:100%;
  height:50px;
  margin-bottom:500px;
  padding:0 40px;
`;

export const ContentSlidePet = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center;
  margin-top:60px;
  /* justify-content:space-between; */
  /* background: #000; */
`;

export const ContainerTitleLostPet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

  width:100%;
`;

export const TitleLostPet = styled.h1`
  font-size:2.5rem;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const TextCountPetsLost = styled.p`
  color:#104B60;
  font-size:1rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  margin:30px 0;
`;

export const ContainerPositionMapOngs = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  margin-top:100px;
`;

export const TextPositionsMapOngs = styled.p`
  font-weight:bold;
  font-family:Mulish, serif;
  font-size:1.5rem;
`;

export const ContainerMap = styled.div`
  margin-top:20px;

  width: 90%;
  height:100%;

  display:flex;
  align-items:center;
  justify-content:center;

`;

export const Footer = styled.div`
  /* display:flex; */
  /* flex-direction:column; */
  /* align-items:center; */
  /* justify-content:flex-end; */
  background: #73ABBF;
  /* position:absolute; */
  /* bottom:0; */
  width:100vw;
  /* height:150px; */



`;

export const ImageFooterBackgound =  styled.img`
  width:90%;
  height:100px;
`;
