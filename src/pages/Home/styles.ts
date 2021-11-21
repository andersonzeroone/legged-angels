import styled from 'styled-components';
import fundoSvg from '../../assets/fundo-page3.svg';
import { shade } from 'polished';

export const ConatinerMain = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:flex-start;

  background:url(${fundoSvg}) no-repeat center;
  background-size:cover;

  padding:0 25px 0;
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
  /* align-items:flex-start; */
  /* justify-content:center; */
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

export const ContainerTypeSearch = styled.div`
  display:flex;
  flex-direction:row;
  margin-bottom:10px;
`;

export const LabelInputRadio = styled.label`
  font-size:1.8rem;
  font-family:'Mulish', serif;
  margin-right:20px;
`;

export const InputRadio = styled.input`
  margin-right:10px;
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
  margin-bottom:40px;
  padding:0 20px;
`;

export const ContentSlidePet = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center;
  margin-top:60px;
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

  margin:-60px 0 20px;
`;

export const ContainerFilterPetLost = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
`;

export const TextFilterPetLost = styled.p`
  color:#104B60;
  font-size:1.2rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  margin-top:40px;
  margin-bottom:15px;
`;

export const ContainerPositionMapOngs = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;

  margin:100px 0 200px;
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
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:flex-end;
  background: #73ABBF;
  bottom:0;
  left:0;
  right:0;
  width:100%;
  height:150px;

`;

export const ImageFooterBackgound =  styled.img`
  width:90%;
  height:100px;
`;

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

export const ContainerPoupMap = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
`;


export const ImageOngPoup = styled.img`
  width:60px;
  height:60px;
  border-radius:50px;

  margin-right:15px;
`;

export const NameOngPoup = styled.p`
  margin-right:10px;

  font-size:1.3rem;
  font-family:'Mulish', serif;
`;


export const ButtonViewOng = styled.button`
  border:0;
  background:none;
`;
