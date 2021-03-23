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

import photo from "../../assets/sign-in-background.jpg";
import pata from '../../assets/pata.png';

import {
  Container,
  Header,
  Title,
  Content,
  SubTitle,
  SelectTypeUser,
  ContainerTypeUser,
  SelectOptions,
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

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');

  const [cities,setCities] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState('');

  useEffect(()=>{
      axios.get<IbgeUfResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then( response =>{
        const ufInitials = response.data.map( uf => uf.sigla);

        // let ufsArray : any = [];

        // ufInitials.map(uf =>(
        //   ufsArray.push({
        //     label:uf,
        //     value:uf
        //   })
        // ))

        // setUfs(ufsArray)
        setUfs(ufInitials)
        // console.log(ufsArray);
      })
  },[]);

  useEffect(() =>{
    axios.get<IbgeCityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
      .then(response =>{
        const cityName = response.data.map( city => city.nome);
        setCities(cityName);
        console.log(cityName)
      })
  },[selectedUf]);

  function handleSelect(ev:any){
    const value = ev.target.value;
    setSelectedUf(value);
    console.log(value)
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
        <Form onSubmit={()=>{}}>
          <ContainerTypeUser>
            <SelectTypeUser>
              <Label>Selecione um tipo de usuário</Label>
              <SelectOptions>
                <option value='common'>Doador - possui algum animal ou encontrou um abandonado e deseja achar um novo lar para ele</option>
                <option value='common'>Dono - se você perdeu seu pet e deseja cadastra-ló em nossa plataforma para encontra-lo.</option>
                <option value='common'>ONG - Se é uma organização ou instituição que acolhe animais necessitados e deseja encontrar um novo lar para eles.</option>
              </SelectOptions>

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
                type='text'
                name="whatsapp"
                icon={FiPhone}
                masks='(99) 9 9999-9999'
                placeholder='(77) 99999-9999'
              />
            </DataUser>

            <DataUser>
              <Label>Número de telefone</Label>
              <InputMask
                type='text'
                name="telephone"
                icon={FiPhone}
                masks='(99) 9 9999-9999'
                placeholder='(77) 99999-9999'
              />
            </DataUser>

            <DataUser>
              <Label>Data de nascimento</Label>
              <InputMask
                name="birthday"
                icon={FiCalendar}
                masks='99/99/999'
                placeholder='dd/mm/aaaa'
              />
              {/* <Input
                name="birthday"

                type="text"
                placeholder="Ex.:(74)9 9999-2222"
              /> */}
            </DataUser>

            <DataUser />

            <SubTitle>Endereço:</SubTitle>

            <DataUser />

            <ContainerDataUserSelect>
              <DataUser>
                <Label>UF</Label>
                <SelectOptions
                  onChange={handleSelect}
                  placeholder='selecione sua UF'
                >

                  {ufs.map(uf=>(

                    <option value={uf}>{uf}</option>
                  ))}
                </SelectOptions>
              </DataUser>
              <DataUser>
                <Label>Cidade</Label>
                <SelectOptions

                  placeholder='selecione uma cidade'
                >
                  {/* <option value='0'>Selecione uma cidade</option> */}

                  {cities.map(citie=>(

                    <option value={citie}>{citie}</option>
                  ))}
                </SelectOptions>
              </DataUser>
            </ContainerDataUserSelect>

            <DataUser />
            <DataUser>
              <Label>Lougradoro/Rua</Label>
              <Input
                name="street"
                icon={FiType}
                type="text"
                placeholder="Digite seu endereço"
              />
            </DataUser>

            <DataUser>
              <Label>Bairro</Label>
              <Input
                name="distric"
                icon={FiType}
                type="text"
                placeholder="Digite seu endereço"
              />
            </DataUser>

            <DataUserNumberCep>
              <DataUser>
                <Label>Número</Label>
                <Input
                  name="addressNumber"
                  icon={FiType}
                  type="text"
                  placeholder="Ex.:Nº222"
                />
              </DataUser>

              <DataUser>
                <Label>CEP</Label>
                <InputMask
                  type='text'
                  name="postalCode"
                  icon={FiType}
                  masks='99999-999'
                  placeholder='Ex: 9999999-999'
                />
              </DataUser>
            </DataUserNumberCep>

            <DataUser>
              <Label>Complemento (opcional)</Label>
              <Input
                name="complement"
                icon={FiType}
                type="text"
                placeholder="Ex.: Próximo ao mercado"
              />
            </DataUser>

            <SubTitle>Dados para login:</SubTitle>
            <DataUser />

            <DataUser>
              <Label>E-mail</Label>
              <Input
                name="email"
                icon={FiMail}
                type="text"
                placeholder="Digite seu E-mail"
              />
            </DataUser>

            <DataUser>
              <Label>Confirmar E-mail</Label>
              <Input
                name="confirmEmail"
                icon={FiMail}
                type="text"
                placeholder="Confirmar email"
              />
            </DataUser>

            <DataUser>
              <Label>Senha</Label>
              <Input
                name="password"
                icon={FiLock}
                type="text"
                placeholder="Digite sua Senha"
              />
            </DataUser>

            <DataUser>
              <Label>Confirmar senha</Label>
              <Input
                name="confirmPassword"
                icon={FiLock}
                type="text"
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
                <Button>
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
