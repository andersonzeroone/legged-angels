import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {
  FiArrowLeft,
} from "react-icons/fi";

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';
import CardPets from '../../components/CardPet';

import imgPet from '../../assets/ImgDogCat.png'
import imgCat from '../../assets/imgPet.png'
import imgDog from '../../assets/ImgDog.png'
import imgSexPetM from '../../assets/imgSexo.png';
import divider from '../../assets/line.png';
import iconAdoption from '../../assets/iconAdoption.png';
import imgTypeDog from '../../assets/imgTypeDog.png';


import {
  Container,
  ContainerButttonGoBack,
  ButtonGoBack,
  ContainerNamePet,
  NamePet,
  ImageTypePet,
  Content,
  ContainerImages,
  ImagePreview,
  ContentImage,
  ButtonImage,
  Image,
  ContainerInfo,
  ContainerNameSex,
  ContentInfo,
  Legend,
  Label,
  Text,
  ImageSex,
  TextStatus,
  ContainerDivider,
  Divider,
  ButtonAdoption,
  IconAdoption,
  ContainerLostPet,
  ContainerTitleLostPet,
  TitleLostPet,
  ContentSlidePet,
  TextCountPetsLost
} from "./styles";



const SeeDetailsPet:React.FC =() =>{
  const history = useHistory();
  const imgs = [
    {img:imgCat},
    {img:imgCat},
    {img:imgDog},
    {img:imgPet},
    {img:imgCat},
  ]
  // const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [activeImageindex,setActiveImageindex] = useState(0);

  function handleNavigationListPet(){
    history.push('listPets');
  }

  return (
    <>
      <Container>
        <Header/>
        <ContainerButttonGoBack>
          <ButtonGoBack onClick={()=> history.goBack()}>
            <FiArrowLeft style={{ marginRight: 5 }} />
            Voltar
          </ButtonGoBack>
        </ContainerButttonGoBack>

        <ContainerNamePet>
          <NamePet>Conheça, Logan</NamePet>
          <ImageTypePet src={imgTypeDog}/>
        </ContainerNamePet>
        <Content>
          <ContainerImages>
            <ImagePreview src={imgs[activeImageindex].img}/>
              <ContentImage>
                {
                  imgs.map((image,index)=>(
                    <ButtonImage
                      className={activeImageindex === index ? "active" : ''}
                      key={index}
                      onClick={()=> {
                        setActiveImageindex(index);
                      }}
                    >
                      <Image src={image.img}/>
                    </ButtonImage>

                  ))
                }
            </ContentImage>
          </ContainerImages>

          <ContainerInfo>
            <ContainerNameSex>
              <ContentInfo>
                <Label>Nome:</Label>
                <Text>Logan</Text>
              </ContentInfo>

              <ContentInfo>
                <Label>Sexo:</Label>
                <Text>Macho</Text>
                <ImageSex src={imgSexPetM}/>
              </ContentInfo>
            </ContainerNameSex>

            <ContentInfo>
              <Label>Status:</Label>
              <TextStatus>Para adoção</TextStatus>
            </ContentInfo>
          </ContainerInfo>

          <ContainerDivider>
            <Divider src={divider}/>
          </ContainerDivider>

          <Legend>Informações sobre o pet:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Espécie:</Label>
              <Text>Gato</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Fase:</Label>
              <Text>Filhote</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Castração:</Label>
              <Text>Sem informação</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Raça:</Label>
              <Text>Pé duro</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Vacinação:</Label>
              <Text>vacidado</Text>
            </ContentInfo>
          </ContainerInfo>

          <Legend>Informações adicionais:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Cor dos olhos:</Label>
              <Text>Preto</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Cor do pelo:</Label>
              <Text>Branco</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Deficiência ou característica:</Label>
              <Text>Sem</Text>
            </ContentInfo>
          </ContainerInfo>

          <Legend>Informações sobre doação:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Doador:</Label>
              <Text>Carlos</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Cidade:</Label>
              <Text>Senhor do bonfim - BA</Text>
            </ContentInfo>
          </ContainerInfo>

          <ButtonAdoption>
            <IconAdoption src={iconAdoption}/>
            Quero adotar
          </ButtonAdoption>
        </Content>

        <ContainerLostPet>
          <ContainerTitleLostPet>
            <TitleLostPet>Ajude os pets perdidos a encontrarem seus donos.</TitleLostPet>
          </ContainerTitleLostPet>

          <ContentSlidePet>

            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgPet}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />

            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgPet}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgPet}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgPet}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgPet}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
          </ContentSlidePet>

          <TextCountPetsLost>Quantidade de pets perdidos  90.</TextCountPetsLost>
          <Button style={{width:200}}>
              Ver mais.
          </Button>
        </ContainerLostPet>
      </Container>
      <Footer/>
    </>
  );
}

export default SeeDetailsPet;
