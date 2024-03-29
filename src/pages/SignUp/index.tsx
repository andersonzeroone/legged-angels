import {ChangeEvent, useCallback, useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import {useHistory} from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import { FiX } from 'react-icons/fi';
import *  as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import MakerIcon from '../../utils/mapIcon';
import api from '../../services/api';
import {
  FiUser,
  FiPhone,
  FiMail,
  FiLock,
  FiArrowLeft,
  FiPlus,
  FiCalendar,
  FiType
} from "react-icons/fi";

import Button from "../../components/button";
import Input from "../../components/input";
import InputMask from '../../components/inputM';
import Select from '../../components/select'

import {
  Container,
  Header,
  Title,
  Content,
  SubTitle,
  SelectTypeUser,
  ContainerTypeUser,
  ContainerDataUser,
  DataUser,
  Label,
  ContainerDataUserSelect,
  DataUserNumberCep,
  ButtonAddPhotoProfile,
  ContainerAddPhotoProfile,
  ContainerPhotoProfile,
  PhotoProfile,
  ButtonDeletePhotoProfile,
  TextDeletePhotoProfile,
  ContainerSelectPositionMapOngs,
  TextSelectPositionsMapOngs,
  ContainerMap,
  ContainerButton,
  ButtonFinsh,
  ContainerModal,
  HeaderModal,
  TitleModal,
  MainModal,
  TextModal,
  FooterModal,
  ButtonCloseModal,
} from "./styles";

interface IbgeUfResponse{
  sigla:string;
}
interface IbgeCityResponse{
  nome:string;
}

interface SignUpFormData{
  type:string;
  name:string;
  lastName:string;
  whatsapp?:string;
  telephone?:string;
  birthday?:string;
  uf:string;
  city:string;
  street:string;
  distric:string;
  addressNumber?:string;
  postalCode:string;
  complement?:string;
  email:string;
  confirmEmail:string;
  password:string;
  confirmPassword:string;
  photoProfile?:string;
  latitude?:string;
  logitude?:string;
}

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

const SignUp:React.FC =() =>{
// function SignUp(){
  const history = useHistory();

  const optionsTypeUser = [
    {value:'common', label:'Doador - possui algum animal ou encontrou um abandonado e deseja achar um novo lar para ele'},
    {value:'common', label:'Dono - se você perdeu seu pet e deseja cadastra-ló em nossa plataforma para encontra-lo.'},
    {value:'ong', label:'ONG - Se é uma organização ou instituição que acolhe animais necessitados e deseja encontrar um novo lar para eles.'},
  ]

  const formRef = useRef<FormHandles>(null);

  // console.log(formRef)

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities,setCities] = useState<string[]>([]);
  const [typeUser,setTypeUser] = useState(false);

  const [position, setPosition] = useState({ lat:-11.2020652,lng:-40.521877});

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const [errosForm,setErrosForm] = useState('');

  const [modalIsOpen,setIsOpen] = useState(false);

  useEffect(()=>{

     axios.get<IbgeUfResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then( response =>{
        const ufInitials = response.data.map( uf => uf.sigla);
        setUfs(ufInitials)
      })

  },[]);

  useEffect(() =>{
    axios.get<IbgeCityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response =>{
        const cityName = response.data.map( city => city.nome);
        setCities(cityName);
      })
  },[selectedUf]);

  function handleSeletctType(ev:any){
    const value = ev.value;
    console.log(value)
    if(value === 'ong'){
      setTypeUser(true);
    }
  }

  function handleSelect(ev:any){
    const value = ev.value;
    console.log(value)
    setSelectedUf(value);
  }

  function getData(data:any):void{
    const {lat,lng} = position;
    const photoProfile = previewImages[0];

    const dataUser = {...data,logitude:lng.toString(),latitude:lat.toString(),photoProfile}
    handleSubmit(dataUser)
  }

  const handleSubmit = useCallback(async(data:SignUpFormData)=>{
    const {email,confirmEmail, password, confirmPassword} = data;

    if(email !== confirmEmail){
      setErrosForm('A confirmação de e-mail não corresponde com o e-mail informado. ');
      setIsOpen(true);
      return;
    }

    if(password !== confirmPassword){
      setErrosForm('A confirmação de senha não corresponde com a senha informado. ');
      setIsOpen(true);
      return;
    }

    try{

      formRef.current?.setErrors({});

      const schema= Yup.object().shape({
        type:Yup.string()
          .required('Por favor selecione um tipo de usuário'),
        name:Yup.string()
          .required('Nome obrigatório'),
        lastName:Yup.string()
        .when('type',{
          is:'common',
          then:Yup.string()
          .required('Sobrenome obrigatório'),
        }),
        whatsapp:Yup.string()
          .required(),
        telephone:Yup.string()
          .required(),
        birthday:Yup.string()
          .required('Data obrigatótia'),
        uf:Yup.string()
          .required('Uf obrigatória'),
        city:Yup.string()
          .required('Cidade obrigatória'),
        street:Yup.string()
            .required('Lougradoro/Rua obrigatório'),
        distric:Yup.string()
          .required('Bairro obrigatório'),
        addressNumber:Yup.string()
          .required('Número obrigatório'),
        postalCode:Yup.string()
          .required('Por favor informe seu CEP'),
        complement:Yup.string(),
        email:Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        confirmEmail:Yup.string()
          .required('É preciso confirmar seu e-mail')
          .email('Digite um e-mail válido'),
        password:Yup.string()
          .required('Senha obrigatória'),
        confirmPassword:Yup.string()
          .required('É preciso confirmar sua senha'),
        photoProfile:Yup.string()
          .when('type',{
            is:'ong',
            then:Yup.string()
              .required('Por favor selecione adicione uma foto'),
          }),
        latitude:Yup.string()
        .when('type',{
          is:'ong',
          then:Yup.string()
            .required('Por favor click no mapa para selecionar sua posição'),
        }),
      });

      await schema.validate(data,{
        abortEarly:false,
      })
      const dataUser = new FormData();

      dataUser.append('type',data.type)
      dataUser.append('name',data.name)
      dataUser.append('lastName',(data.lastName??''))
      dataUser.append('whatsapp',(data.whatsapp??''))
      dataUser.append('telephone',(data.telephone??''))
      dataUser.append('birthday',(data.birthday??''))
      dataUser.append('uf',data.uf)
      dataUser.append('city',data.city)
      dataUser.append('street',data.street)
      dataUser.append('district',data.distric)
      dataUser.append('addressNumber',(data.addressNumber??''))
      dataUser.append('postalCode',data.postalCode)
      dataUser.append('complement',(data.complement??''))
      dataUser.append('email',data.email)
      dataUser.append('confirmEmail',data.confirmEmail)
      dataUser.append('password',data.password)
      dataUser.append('confirmPassword',data.confirmPassword)
      dataUser.append('latitude',data.latitude??'')
      dataUser.append('longitude',data.logitude??'')

      images.forEach(photoProfile =>{
        dataUser.append('photoProfile',photoProfile)
      })
      console.log('dataForm',dataUser);
      const response = await api.post('/v1/user/register',dataUser);

      const {token} = response.data;

      if(token){
        history.push('/')
      }

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const erros = getValidationErrors(err);
        formRef.current?.setErrors(erros);

        // setErrosForm([erros])
        setIsOpen(true);
        return;
      }
      setErrosForm(err.response.data.result.mensagem);
      setIsOpen(true);
      return;
    }
  },[images,history]);

  function LocationMarker(){

    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e:any) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    });

    return position === null ? null : (
      <Marker icon={MakerIcon} position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )

  }

  function handleSelectImage(event: ChangeEvent<HTMLInputElement>){

    if(!event.target.files){
      return;
    }

    const selectImage = Array.from(event.target.files);
    setImages(selectImage);
    console.log(selectImage[0]);

    const selectImagesPreview = selectImage.map( image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectImagesPreview);
    console.log(selectImagesPreview[0])
  }

  function handleisModal(){
    setIsOpen((state) => !state);
  }


  return (
    <Container>
      <Header>
        <Link to='/'>
          <FiArrowLeft style={{ marginRight: 5 }} />
          Voltar
        </Link>
      </Header>
      <Title>Cadastro</Title>

      <Content>
        <Form  ref={formRef} onSubmit={getData}>
          <ContainerTypeUser>
            <SelectTypeUser>
              <Label>Selecione um tipo de usuário</Label>
              <Select
                name='type'
                placeholder='Selecione um tipo de usuário'
                options={optionsTypeUser}
                onChange={handleSeletctType}
              />

              </SelectTypeUser>

          </ContainerTypeUser>

          <SubTitle>Dados pessoais:</SubTitle>

          <ContainerDataUser>
            <DataUser>
              <Label>Nome</Label>
              <Input
                name="name"
                icon={FiUser}
                type="text"
                placeholder="Digite seu nome"
              />
            </DataUser>

            {!typeUser?(
              <DataUser>
                <Label>Sobrenome</Label>
                  <Input
                    name="lastName"
                    icon={FiUser}
                    type="text"
                    placeholder="Digite seu sobre nome"
                  />
                </DataUser>

                ):<DataUser/>
              }


            <DataUser>
              <Label>Némero de whatsapp</Label>
              <InputMask
                name='whatsapp'
                type='text'
                typeMaks='phone'
                icon={FiPhone}
                mask='(99) 9 9999-9999'
                placeholder='(77) 9 9999-9999'

              />
            </DataUser>

            <DataUser>
              <Label>Número de telefone</Label>
              <InputMask
                name='telephone'
                type='text'
                typeMaks='phone'
                icon={FiPhone}
                mask='(99) 9 9999-9999'
                placeholder='(77) 9 9999-9999'
              />
            </DataUser>

            <DataUser>
            {!typeUser?(<Label>Data de nascimento</Label>):<Label>Data oficial de criação</Label>}

              <InputMask
                name="birthday"
                type='text'
                typeMaks='date'
                icon={FiCalendar}
                mask='99/99/9999'
                placeholder='dd/mm/aaaa'
              />
            </DataUser>

            <DataUser />

            <SubTitle>Endereço:</SubTitle>

            <DataUser />

            <ContainerDataUserSelect>
              <DataUser>
                <Label>UF</Label>
                <Select
                  name='uf'
                  placeholder='Selecione sua UF'
                  options={ufs.map(uf=>({label:uf,value:uf}))}
                  onChange={handleSelect}
                />
                {/* <SelectOptions
                  onChange={handleSelect}
                  placeholder='selecione sua UF'
                >

                  {ufs.map(uf=>(

                    <option value={uf}>{uf}</option>
                  ))}
                </SelectOptions> */}
              </DataUser>
              <DataUser>
                <Label>Cidade</Label>
                <Select
                  name='city'
                  placeholder='Selecione sua cidade'
                  options={cities.map(citie=>({label:citie,value:citie}))}
                />
              </DataUser>
            </ContainerDataUserSelect>

            <DataUser />
            <DataUser>
              <Label>Lougradoro/Rua</Label>
              <Input
                name="street"
                type="text"
                icon={FiType}
                placeholder="Digite seu endereço"
              />
            </DataUser>

            <DataUser>
              <Label>Bairro</Label>
              <Input
                name="distric"
                type="text"
                icon={FiType}
                placeholder="Digite seu endereço"
              />
            </DataUser>

            <DataUserNumberCep>
              <DataUser>
                <Label>Número</Label>
                <Input
                  name="addressNumber"
                  type="text"
                  icon={FiType}
                  typeMask={'addressNumber'}
                  placeholder="Ex.:Nº222"
                />
              </DataUser>

              <DataUser>
                <Label>CEP</Label>
                <InputMask
                  name="postalCode"
                  type='text'
                  typeMaks='cep'
                  icon={FiType}
                  mask='99999-999'
                  placeholder='Ex: 9999999-999'
                />
              </DataUser>
            </DataUserNumberCep>

            <DataUser>
              <Label>Complemento (opcional)</Label>
              <Input
                name="complement"
                type="text"
                icon={FiType}
                placeholder="Ex.: Próximo ao mercado"
              />
            </DataUser>

            <SubTitle>Dados para login:</SubTitle>
            <DataUser />

            <DataUser>
              <Label>E-mail</Label>
              <Input
                name="email"
                type="text"
                icon={FiMail}
                placeholder="Digite seu E-mail"
              />
            </DataUser>

            <DataUser>
              <Label>Confirmar E-mail</Label>
              <Input
                name="confirmEmail"
                type="text"
                icon={FiMail}
                placeholder="Confirmar email"
              />
            </DataUser>

            <DataUser>
              <Label>Senha</Label>
              <Input
                name="password"
                type="text"
                icon={FiLock}
                placeholder="Digite sua Senha"
              />
            </DataUser>

            <DataUser>
              <Label>Confirmar senha</Label>
              <Input
                name="confirmPassword"
                type="text"
                icon={FiLock}
                placeholder="Confirma senha"
              />
            </DataUser>

            <SubTitle>Adicionar foto do perfil:</SubTitle>

            <ContainerAddPhotoProfile>
              {!previewImages[0] ?null : (
                <ContainerPhotoProfile>
                  <PhotoProfile src={previewImages[0]}/>
                  <ButtonDeletePhotoProfile>
                    <TextDeletePhotoProfile>Excluir</TextDeletePhotoProfile>
                  </ButtonDeletePhotoProfile>
                </ContainerPhotoProfile>
              )}

              <ButtonAddPhotoProfile htmlFor="image[]">
                <FiPlus size={50} color="#15b6d6" />
              </ButtonAddPhotoProfile>

              <input
                id="image[]"
                type="file"
                multiple={false}
                onChange={handleSelectImage}
                style={{ display: "none" }}
              />
            </ContainerAddPhotoProfile>
            {!typeUser?(null):(
              <ContainerSelectPositionMapOngs>
              <TextSelectPositionsMapOngs>
                Clique no mapa para marcar a localização da sua ONG/intituição no mapa
              </TextSelectPositionsMapOngs>

              <ContainerMap id="mapid">
                <MapContainer
                  center={[-11.2002747, -40.5228873]}
                  style={{
                    width: "80%",
                    height: 280,
                    borderRadius:20
                  }}
                  zoom={15}

                  // onclick={handleMapClick}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env}`}
                    // url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                  />
                  <LocationMarker/>
                </MapContainer>
              </ContainerMap>
            </ContainerSelectPositionMapOngs>
            )}


            <ContainerButton>
              <ButtonFinsh>
                <Button type='submit'>
                  Finalizar
                </Button>
              </ButtonFinsh>
            </ContainerButton>

          </ContainerDataUser>
        </Form>
      </Content>
      <ContainerModal>
       <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
       >
          <HeaderModal>
            <TitleModal>Por favor, verifique todos os dados</TitleModal>
            </HeaderModal>
          <MainModal>
            <TextModal>{errosForm}</TextModal>
          </MainModal>
          <FooterModal>
            <ButtonCloseModal
              onClick={handleisModal}
            >
              <FiX size={20} style={{marginRight:10}}/>
              Fechar
            </ButtonCloseModal>
          </FooterModal>
       </Modal>
      </ContainerModal>
    </Container>
  );
}

export default SignUp;
