import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import {FiArrowLeft, FiMail, FiMessageCircle, FiX} from "react-icons/fi";
import Modal from 'react-modal';

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
  TextCountPetsLost,
  ContainerModal,
  HeaderModal,
  TitleModal,
  MainModal,
  ContainerInfoModal,
  LegendModal,
  TextModal,
  TextContatcModal,
  LabelModal,
  ButtonWhats,
  ButtonEmail,
  FooterModal,
  ButtonCloseModal

} from "./styles";

const customStyles = {
  content : {
    top  : '50%',
    left : '50%',
    right: 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    borderRadius:20,
    width:'50%'
  }
};
const SeeDetailsPet:React.FC =() =>{
  const history = useHistory();

  const [modalIsOpen,setIsOpen] = useState(false);

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

  function handleisModal(){
    setIsOpen((state) => !state);
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

          <ButtonAdoption
            onClick={handleisModal}
          >
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
              imagePet={imgCat}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />

            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgCat}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgCat}
              city='Senhor do Bonfim'
              status='para Adoção'
              size='P'
              onClick={handleNavigationListPet}
            />
            <CardPets
              namePet='Logan'
              sexy='F'
              imagePet={imgCat}
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
          <Button
            style={{width:200}}
          >
              Ver mais.
          </Button>
        </ContainerLostPet>

        <ContainerModal>
          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <HeaderModal>
              <TitleModal>Dados para Adoção/contato</TitleModal>
            </HeaderModal>

            <MainModal>
              <LegendModal>Dados do doador:</LegendModal>

              <ContainerInfoModal>
                <LabelModal>Cidade:</LabelModal>
                <TextModal>Senhor do Bonfim - BA</TextModal>
              </ContainerInfoModal>

              <ContainerInfoModal>
                <LabelModal>CEP:</LabelModal>
                <TextModal>48970-000</TextModal>
              </ContainerInfoModal>

              <ContainerInfoModal>
                <LabelModal>Rua:</LabelModal>
                <TextModal>Rua aaaa</TextModal>
              </ContainerInfoModal>

              <ContainerInfoModal>
                <LabelModal>Bairro:</LabelModal>
                <TextModal>Nossa alegria</TextModal>
              </ContainerInfoModal>

              <ContainerDivider>
                <Divider src={divider}/>
              </ContainerDivider>

              <LegendModal>Contatos:</LegendModal>

              <ContainerInfoModal>
                <LabelModal>Whatsapp:</LabelModal>
                <TextContatcModal>(74) 9 9999-8888</TextContatcModal>
                <ButtonWhats>
                  <FiMessageCircle size={20} style={{marginRight:10}}/>
                  Entrar em contato
                </ButtonWhats>
              </ContainerInfoModal>

              <ContainerInfoModal style={{marginTop:15}}>
                <LabelModal>E-mail:</LabelModal>
                <TextContatcModal>Nossaalegria@gmail.com</TextContatcModal>
                <ButtonEmail>
                  <FiMail size={20} style={{marginRight:10}}/>
                  Enviar E-mail
                </ButtonEmail>
             </ContainerInfoModal>

              <FooterModal>
                <ButtonCloseModal
                  onClick={handleisModal}
                >
                  <FiX size={20} style={{marginRight:10}}/>
                  Fechar
                </ButtonCloseModal>
              </FooterModal>
            </MainModal>

          </Modal>
        </ContainerModal>
      </Container>
      <Footer/>
    </>
  );
}

export default SeeDetailsPet;
