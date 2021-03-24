import {useEffect, useState} from 'react';
import {Form} from '@unform/web';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import {LatLng, latLng, LeafletMouseEvent, LocationEvent, map} from 'leaflet';
import MakerIcon from '../../utils/mapIcon';
import axios from 'axios';

import {
  FiUser,
  FiPhone,
  FiMapPin,
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

import photo from "../../assets/sign-in-background.jpg";


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
  ButtonFinsh
} from "./styles";

interface IbgeUfResponse{
  sigla:string;
}
interface IbgeCityResponse{
  nome:string;
}

function SignUp() {

  const optionsTypeUser = [
    {value:'common', label:'Doador - possui algum animal ou encontrou um abandonado e deseja achar um novo lar para ele'},
    {value:'common1', label:'Dono - se você perdeu seu pet e deseja cadastra-ló em nossa plataforma para encontra-lo.'},
    {value:'ong', label:'ONG - Se é uma organização ou instituição que acolhe animais necessitados e deseja encontrar um novo lar para eles.'},
  ]

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities,setCities] = useState<string[]>([]);

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


  function handleSelect(ev:any){
    const value = ev.value;
    setSelectedUf(value);
  }

  function handleSubmit(data:object):void{
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <a href="">
          <FiArrowLeft style={{ marginRight: 5 }} />
          Voltar
        </a>
      </Header>
      <Title>Cadastro</Title>

      <Content>
        <Form initialData={{}} onSubmit={handleSubmit}>
          <ContainerTypeUser>
            <SelectTypeUser>
              <Label>Selecione um tipo de usuário</Label>
              <Select
                name='type'
                placeholder='Selecione um tipo de usuário'
                options={optionsTypeUser}
                onchage={()=>{}}
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

            <DataUser>
              <Label>Sobrenome</Label>
              <Input
                name="lastName"
                icon={FiUser}
                type="text"
                placeholder="Digite seu sobre nome"
              />
            </DataUser>

            <DataUser>
              <Label>Némero de whatsapp</Label>
              <InputMask
                name='whatsapp'
                type='text'
                icon={FiPhone}
                mask='(99)9 9999-9999'
                placeholder='(77)9 9999-9999'

              />
            </DataUser>

            <DataUser>
              <Label>Número de telefone</Label>
              <InputMask
                name='telephone'
                type='text'
                icon={FiPhone}
                mask='(99)9 9999-9999'
                placeholder='(77)9 9999-9999'
              />
            </DataUser>

            <DataUser>
              <Label>Data de nascimento</Label>
              <InputMask
                name="birthday"
                type='text'
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
                  placeholder="Ex.:Nº222"
                />
              </DataUser>

              <DataUser>
                <Label>CEP</Label>
                <InputMask
                  name="postalCode"
                  type='text'
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
            <DataUser />

            <ContainerAddPhotoProfile>
              <ContainerPhotoProfile>
                <PhotoProfile src={photo} />

                <ButtonDeletePhotoProfile>
                  <TextDeletePhotoProfile>Excluir</TextDeletePhotoProfile>
                </ButtonDeletePhotoProfile>
              </ContainerPhotoProfile>

              <ButtonAddPhotoProfile htmlFor="image[]">
                <FiPlus size={50} color="#15b6d6" />
              </ButtonAddPhotoProfile>

              <input
                style={{ display: "none" }}
                multiple
                type="file"
                id="image[]"
              />
            </ContainerAddPhotoProfile>

            <ContainerSelectPositionMapOngs>
              <TextSelectPositionsMapOngs>
                Selecione a localização da sua ONG/intituição no mapa
              </TextSelectPositionsMapOngs>

              <ContainerMap>
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
                  <Marker
                    icon={MakerIcon}
                    position={[-11.2002747, -40.5228873]}
                    >
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </ContainerMap>
            </ContainerSelectPositionMapOngs>

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
    </Container>
  );
}

export default SignUp;
