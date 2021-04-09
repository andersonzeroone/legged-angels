import { shade } from 'polished';
import styled from 'styled-components';
import fundoSvg from '../../assets/fundo1.svg';

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  /* height:100vh; */
  padding:0 20px 0px;
  background: #FFFFFF;
  /* background:url(${fundoSvg}) no-repeat center; */
  /* background-size:cover; */
`;

export const ContainerButttonGoBack = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  margin-top:20px;
`;

export const ContainerNamePet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  width:60%;
`;

export const NamePet = styled.h1`
  font-family:'Francois One', serif;
  font-size:2.3rem;
`;

export const ImageTypePet = styled.img`
  height:50px;
  width:50px;
  margin-left:10px;
`;

export const ButtonGoBack = styled.button`
  display: flex;
  justify-content:center;
  /* align-items:center; */
  text-decoration:none;
  border-radius:12px;
  border:2px solid #CC9E1F;
  padding:4px 10px;
`;

export const Content = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  background: #F7F3FA;
  width:60%;
  margin-top:30px;
  border-radius:15px;
  padding:40px 80px;

  margin-bottom:60px;
`;

export const ContainerImages = styled.div`
  display:flex;
  flex-direction:column;
  width:95%;
  align-items:flex-start;
`;

export const  ImagePreview = styled.img`
  width: 100%;
  height: 350px;
  /* border:1px solid #000; */
  object-fit: cover;
  border-radius:20px;
`;

export const ContentImage = styled.div`
  margin:30px 0 50px;
  display:flex;
  flex-direction:row;
`;

export const ButtonImage = styled.button`
  height:6rem;
  width:6rem;
  border:0;
  margin-right:20px;
  background: none;

  cursor: pointer;

  border-radius: 20px;
  overflow: hidden;
  outline: none;
  opacity: 0.6;

  .active {
    opacity: 1;
  }
`;

export const Image = styled.img`
  height:6rem;
  width:6rem;
  object-fit: cover;
`;

export const ContainerInfo = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:space-between;

  width:100%;
`;

export const ContainerNameSex = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  width:100%;
`;

export const ContentInfo = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;

  margin-bottom:5px;
`;

export const Legend = styled.legend`
  color:#000;
  font-size:2.3rem;
  font-family:'Mulish', serif;
  font-weight:900;
  margin:40px 0 20px;
`;

export const Label = styled.p`
  color:#104B60;
  font-size:1.8rem;
  font-family:'Mulish', serif;
  font-weight:500;
  margin-right:5px;
`;

export const Text = styled.p`
  color:#104B60;
  font-size:2rem;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const ImageSex = styled.img`
  height:30px;
  width:30px;
  margin-left:5px;
`;

export const TextStatus = styled.p`
  color:#FFD04D;
  font-size:2rem;
  font-family:'Mulish', serif;
`;

export const ContainerDivider = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;

  width:100%;

  margin:40px 0 0;
`;

export const Divider = styled.img`
  width:100%;
`;

export const ButtonAdoption = styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;

  background:#FFD04D;
  height:45px;
  border-radius:10px;
  border:0;

  margin-top:30px;
  padding: 0 20px;

  height:50px;
  width:250px;

  color:#FFF;
  font-size:1.5rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#FFD04D')};
  }

`;

export const IconAdoption = styled.img`
  height:35px;
  width:35px;
  margin-right:10px;
`;

export const ContainerLostPet = styled.div`
  margin:50px 0 80px;
  width:90%;
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

export const ContentSlidePet = styled.div`
  display:flex;
  flex-direction:row;
  width:100%;
  align-items:center;
  margin-top:60px;
`;

export const TextCountPetsLost = styled.p`
  color:#104B60;
  font-size:1rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  margin:-60px 0 20px;
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

export const ContainerInfoModal = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
`;

export const LegendModal = styled.p`
  color:#104B60;
  font-size:1.8rem;
  font-family:'Mulish', serif;
  font-weight:900;
  margin:20px 0;
`;

export const LabelModal = styled.p`
  color:#104B60;
  font-size:1.6rem;
  font-family:'Mulish', serif;
  font-weight:bold;
  margin-right:10px;
`;

export const TextModal = styled.p`
  color:#104B60;
  font-size:1.6rem;
  font-family:'Mulish', serif;
`;

export const TextContatcModal = styled.p`
  color:#104B60;
  font-size:1.6rem;
  font-family:'Mulish', serif;

  margin-right:40px;
`;

export const ButtonWhats = styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;

  background:#FFD04D;
  height:55px;
  border-radius:10px;
  border:0;

  padding: 0 15px;

  height:40px;
  width:240px;

  color:#FFF;
  font-size:1.3rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#FFD04D')};
  }

`;

export const ButtonEmail = styled.button`
  display:flex;
  flex-direction:row;
  align-items:center;
  text-decoration:none;

  background:#5390A6;
  height:45px;
  border-radius:10px;
  border:0;

  padding: 0 15px;

  height:40px;
  width:200px;

  color:#FFF;
  font-size:1.3rem;
  font-family:'Mulish', serif;
  font-weight:bold;

  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#5390A6')};
  }

`;

export const FooterModal = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  width:100%;

  margin:120px 0 70px;
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

