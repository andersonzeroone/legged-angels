import { shade } from 'polished';
import styled from 'styled-components';
import fundoSvg from '../../assets/fundo1.svg';

export const Container = styled.div`
  display:flex;
  flex:1;
  flex-direction:column;
  align-items:center;
  padding:20px 20px 80px;
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
  width:50%;
  margin-top:30px;
  border-radius:15px;
  padding:10px 30px;
`;

export const Legend = styled.h1`
  font-size:2rem;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;
  margin:30px 0 30px;
`;

export const Label = styled.p`
  font-size:1.5rem;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;
  margin-bottom:10px;
`;

export const ContainerInfo = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  /* justify-content:space-between; */
`;

export const ContentInfo = styled.div`
  margin-right:70px;
`;

export const InfoAdditional = styled.textarea`
  width:60%;
  height:200px;

  margin-bottom:30px;
`;

export const ContainerRadio = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  margin-top:30px;
 ;`

export const LabelInputRadio = styled.label`
  font-size:1.2rem;
  font-family:'Mulish', serif;
`;

export const InputRadio = styled.input`
  margin-right:10px;
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

export const ContainerImages = styled.div`
  display:flex;
  flex-direction:column;
  width:60%;
  align-items:flex-start;

  margin: 20px 0;
`;

export const  ImagePreview = styled.img`
  width: 100%;
  height: 300px;
  /* border:1px solid #000; */
  object-fit: cover;
`;

export const ContentImage = styled.div`
  margin-top:30px;
  display:flex;
  flex-direction:row;
`;

export const ButtonImage = styled.button`
  height:6rem;
  width:6rem;
  border:1px solid #000;
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

export const ContainerPhotoButtonDelete = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin-left:20px;

`;

export const Image = styled.img`
  height:6rem;
  width:6rem;
  object-fit: cover;
`;

export const ButtonDeletePhoto = styled.button`
  cursor: pointer;
  border:0;
  width:60px;
  padding:4px;
  border-radius:5px;
  margin-top:10px;
`;

export const ContainerButtonAddPhoto = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  /* justify-content:center; */

`;

export const ButtonAddPhoto = styled.label`
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

export const TextButtonAddPhoto = styled.p`
  margin-top:10px;
  margin-left:20px;
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

export const ContainerLogon = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:20px;
`;

export const TitleLogon = styled.div`
  font-size:1.8rem;
  font-family:'Mulish', serif;
`;

export const ImageLogon = styled.img`
  height:20rem;
  margin:20px 0;
`;
