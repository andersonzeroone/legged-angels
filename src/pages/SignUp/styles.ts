import { shade } from 'polished';
import styled from 'styled-components';
import fundoSvg from '../../assets/fundo1.svg';

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  /* height:100vh; */
  padding:20px;
  /* background: #000; */
  background:url(${fundoSvg}) no-repeat center;
  background-size:cover;
`;

export const Header = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  a{
    display: flex;
    justify-content:center;
    /* align-items:center; */
    text-decoration:none;
    border-radius:12px;
    border:2px solid #CC9E1F;
    padding:4px 10px;
  }
`;

export const Title = styled.h1`
  color:#FEA21D;
  font-family:'Francois One', serif;
  font-size:3rem;
`;

export const Content = styled.div`
  background: #FFFFFF;
  width:70%;
  margin-top:30px;
  border-radius:15px;
  padding:0px 20px 80px 20px;
`;

export const SubTitle = styled.h1`
  margin-top: 40px;
  font-weight:500;
  font-family:Mulish, serif;
`;

export const ContainerTypeUser = styled.div`
  display:flex;
  width:100%;
  padding-top:40px;
`;

export const SelectTypeUser = styled.div`
  display:flex;
  flex-direction:column;
`;


export const ContainerDataUser = styled.div`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  margin-top:-20px;
`;

export const DataUser = styled.div`
  width:45%;
  margin-top:40px;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
`;

export const Label = styled.p`
  font-weight:bold;
  font-size:1.5rem;
  font-family:Mulish, serif;
  margin-bottom:5px;
`;

export const ContainerDataUserSelect = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  width:50%;
`;

export const DataUserNumberCep = styled.div`
  display:flex;
  justify-content:space-between;
  width:45%;
`;


export const ContainerAddPhotoProfile = styled.div`
  display:flex;
  width:100%;
  margin-top:30px;
`;


export const ContainerPhotoProfile = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`;


export const PhotoProfile = styled.img`
  height:6rem;
  width:6rem;
  border-radius:10px;
`;

export const ButtonDeletePhotoProfile = styled.button`
  margin-top:10px;
  cursor: pointer;
`;


export const TextDeletePhotoProfile = styled.a`
`;

export const ButtonAddPhotoProfile = styled.label`
  /* width:30%; */
  height:6rem;
  width:6rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border: 3px dashed #96D2F0;
  border-radius: 20px;
  cursor: pointer;
  padding:5px;
  margin-left:20px;
`;

export const ContainerSelectPositionMapOngs = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-top:100px;
`;

export const TextSelectPositionsMapOngs = styled.p`
  font-weight:bold;
  font-family:Mulish, serif;
  font-size:1.5rem;
`;

export const ContainerMap = styled.div`
  margin-top:20px;
  width: 100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`;

export const ContainerButton = styled.div`
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  margin-top:80px;
`;


export const ButtonFinsh = styled.div`
  width:60%;
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
