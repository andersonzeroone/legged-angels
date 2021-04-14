import { useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {FiArrowLeft, FiMail, FiMessageCircle, FiX} from "react-icons/fi";
import Modal from 'react-modal';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/button';
import CardPets from '../../components/CardPet';

import imgCat from '../../assets/imgPet.png'

import imgSexPetM from '../../assets/imgSexo.png';
import divider from '../../assets/line.png';
import iconAdoption from '../../assets/iconAdoption.png';
import imgTypeDog from '../../assets/imgTypeDog.png';
import api from '../../services/api';

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

interface DetailsPetProps{
  idPet:number;
}

interface SeeDetailsPetProps{
  idPet:number
  name:string
  sex:string
  status:string
  species:string
  phase:string;
  castration:string;
  race:string;
  vaccination:string;
  eyeColor:string;
  hairColor:string;
  feature:string
  city:string;
  uf:string;
  photos: Array<{
    photo:string,
    idPhoto:string
  }>;
  userType:string;
  idUser:number;
  nameUser:string;
  lastNameUser:string;
}

interface UserProps{
  idUser: number;
  name:string;
  lastName:string;
  whatsapp:string;
  email:string;
  city:string;
  uf:string;
  postalCode:string;
  street:string;
  district:string;
  addressNumber:string;
  complement:string;
}

// interface PetProps{
//   idPet:number;
//   name:string;
//   uf:string;
//   city:string;
//   phase:string;
//   photo:string;
//   sex:string;
//   status:string;
// }

const SeeDetailsPet:React.FC =() =>{

  const route = useLocation();
  const {idPet} = route.state as DetailsPetProps;

  console.log('idParm', idPet)
  const history = useHistory();

  const [modalIsOpen,setIsOpen] = useState(false);

  // const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [activeImageindex,setActiveImageindex] = useState<number>(0);

  const [detailsPet, setDetailsPet] = useState<SeeDetailsPetProps>(
    {} as SeeDetailsPetProps
  );

  const [user, setUser] = useState<UserProps>({} as UserProps);

  useEffect(()=>{
    api.get(`/v1/pets/show/${idPet}`)
      .then( res =>{
        setDetailsPet(res.data);
      }).catch(err=>{
        console.log('resData', err.response.data.result.mensagem);
      })

  },[idPet]);

  useEffect(()=>{
    api.get(`/v1/adoption/showUser`,{
      params:{
        idUser:detailsPet.idUser
      }
    })
      .then(res =>{
        setUser(res.data);
      }).catch(err =>{
        console.log(err.response.data.result.mensagem);
      });
  },[detailsPet.idUser]);



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
          <NamePet>Conheça, {detailsPet.name}</NamePet>
          <ImageTypePet src={imgTypeDog}/>
        </ContainerNamePet>
        <Content>
          <ContainerImages>
            { detailsPet.photos ?(
              <ImagePreview src={detailsPet.photos[activeImageindex].photo}/>
            ):null}

            <ContentImage>
              {  detailsPet.photos ? (
                  detailsPet.photos.map((image,index)=>(
                    <ButtonImage
                      className={activeImageindex === index ? "active" : ''}
                      key={index}
                      onClick={()=> {
                        setActiveImageindex(index);
                      }}
                      >
                      <Image src={image.photo}/>
                    </ButtonImage>
                  ))
                ): null}

            </ContentImage>
          </ContainerImages>

          <ContainerInfo>
            <ContainerNameSex>
              <ContentInfo>
                <Label>Nome:</Label>
                <Text>{detailsPet.name}</Text>
              </ContentInfo>

              <ContentInfo>
                <Label>Sexo:</Label>
                <Text>{detailsPet.sex === 'male' ? 'Macho': 'Femêa'}</Text>
                <ImageSex src={imgSexPetM}/>
              </ContentInfo>
            </ContainerNameSex>

            <ContentInfo>
              <Label>Status:</Label>
              <TextStatus
                style={{
                  color:(detailsPet.status === 'lost'? '#c53030': '#FFD04D')
              }}
              >{detailsPet.status}</TextStatus>
            </ContentInfo>
          </ContainerInfo>

          <ContainerDivider>
            <Divider src={divider}/>
          </ContainerDivider>

          <Legend>Informações sobre o pet:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Espécie:</Label>
              <Text>{detailsPet.species === 'dog'?'Cachorro' : 'Gato'}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Fase:</Label>
              <Text>{detailsPet.phase}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Castração:</Label>
              <Text>{detailsPet.castration}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Raça:</Label>
              <Text>{detailsPet.race}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Vacinação:</Label>
              <Text>{detailsPet.vaccination}</Text>
            </ContentInfo>
          </ContainerInfo>

          <Legend>Informações adicionais:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Cor dos olhos:</Label>
              <Text>{detailsPet.eyeColor}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Cor do pelo:</Label>
              <Text>{detailsPet.hairColor}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Deficiência ou característica:</Label>

            </ContentInfo>
            <Text> * {detailsPet.feature}</Text>
          </ContainerInfo>

          <Legend>Informações sobre doação:</Legend>

          <ContainerInfo>
            <ContentInfo>
              <Label>Doador:</Label>
              <Text>{user.email}</Text>
            </ContentInfo>

            <ContentInfo>
              <Label>Cidade:</Label>
              <Text>{detailsPet.city} - {detailsPet.uf}</Text>
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
                <TextModal>{user.city} - {user.uf}</TextModal>
              </ContainerInfoModal>

              <ContainerInfoModal>
                <LabelModal>CEP:</LabelModal>
                <TextModal>74 9988988</TextModal>
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
                <TextContatcModal></TextContatcModal>
                <ButtonWhats>
                  <FiMessageCircle size={20} style={{marginRight:10}}/>
                  Entrar em contato
                </ButtonWhats>
              </ContainerInfoModal>

              <ContainerInfoModal style={{marginTop:15}}>
                <LabelModal>E-mail:</LabelModal>
                <TextContatcModal>{user.email}</TextContatcModal>
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
