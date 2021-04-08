import { useCallback, useEffect, useRef, useState } from 'react';
import {FiLogIn,FiUserPlus} from 'react-icons/fi';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet";
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import axios from 'axios';

import {
  ConatinerMain,
  Container,
  Content,
  ContainerMotivation,
  ContainerImage,
  Title,
  SubTitle,
  ImageMotivation,
  TextSearchPet,
  ContainerDivisor,
  ContainerSearch,
  ContainerSelectFilterSearch,
  ButtonSearch,
  Divisor,
  ContainerLostPet,
  ContainerTitleLostPet,
  ContentSlidePet,
  TitleLostPet,
  TextCountPetsLost,
  ContainerPositionMapOngs,
  TextPositionsMapOngs,
  ContainerMap,
  Footer,
  ImageFooterBackgound

 } from './styles';

import imgDogCat from '../../assets/ImgDogCat.png';
import imgDog from '../../assets/ImgDog.png';
import divisor from '../../assets/divisor.png';
import imgPet from '../../assets/imgPet.png';
import backGroundFooter from '../../assets/imgfooter.png';

import Button from '../../components/button';
import CardPets from '../../components/CardPet';
import Select from '../../components/select';
import Header from '../../components/header';

interface IbgeUfResponse{
  sigla:string;
}
interface IbgeCityResponse{
  nome:string;
}

const optionsType = [
  {value:'dog', label:'Cachorros'},
  {value:'cat', label:'Gatos'},
  {value:'ong', label:'ONGs '},
]

function Home(){
  const [position, setPosition] = useState({ lat:-11.2020652,lng:-40.521877});

  const formRef = useRef<FormHandles>(null);
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
    console.log(value)
    setSelectedUf(value);
  }
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
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )

  }

  const getData = useCallback((data:object)=>{
    console.log(data);
  },[]);

  return(
    <ConatinerMain>
    <Container>
      <Header/>
      <Content>
        <ContainerMotivation>
          <Title>Traga Felicidade
            para sua vida, adote um pet :)</Title>
          <SubTitle>Existem milhões de pets, que precisam de um lar,
            vamos ajudar esses pets a tem uma vida melhor.</SubTitle>
        </ContainerMotivation>
        <ContainerImage>
          <ImageMotivation
            src={imgDogCat}
          />

        </ContainerImage>
      </Content>

      <ContainerSearch>
        <TextSearchPet>Procure por um pet</TextSearchPet>

        <ContainerSelectFilterSearch>
          <Form
            ref={formRef}
            onSubmit={getData}
            style={{
              display:'flex',
              width:'100%',

            }}
          >
            <Select
              name='type'
              placeholder='Selecione um tipo'
              options={optionsType}
              style={{width:'10%',marginRight:10}}
            />
            <Select
              name='uf'
              placeholder='Selecione sua UF'
              options={ufs.map(uf=>({label:uf,value:uf}))}
              onChange={handleSelect}
            />
            <Select
              name='city'
              placeholder='Selecione sua cidade'
              options={cities.map(citie=>({label:citie,value:citie}))}
            />
            <ButtonSearch type='submit'>
              Buscar pet
            </ButtonSearch>
          </Form>
        </ContainerSelectFilterSearch>
      </ContainerSearch>

      <ContainerDivisor>
        <Divisor
          src={divisor}
        />
      </ContainerDivisor>

      <Content>
        <ContainerImage>
          <ImageMotivation
            src={imgDog}
          />
        </ContainerImage>

        <ContainerMotivation>
          <Title> Nos ajudem a levar felicidade
            para outras pessoas, ou encontre seu pet perdido.
          </Title>
          <SubTitle>Existem milhões de pets, que precisam de um lar,
            vamos ajudar esses pets a tem uma vida melhor.
          </SubTitle>

          <Button
            style={{width:200}}
          >
            Cadastrar pet
          </Button>
        </ContainerMotivation>
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

          />
          <CardPets
            namePet='Logan'
            sexy='F'
            imagePet={imgPet}
            city='Senhor do Bonfim'
            status='para Adoção'
            size='P'

          />
          <CardPets
            namePet='Logan'
            sexy='F'
            imagePet={imgPet}
            city='Senhor do Bonfim'
            status='para Adoção'
            size='P'

          />
          <CardPets
            namePet='Logan'
            sexy='F'
            imagePet={imgPet}
            city='Senhor do Bonfim'
            status='para Adoção'
            size='P'

          />
          <CardPets
            namePet='Logan'
            sexy='F'
            imagePet={imgPet}
            city='Senhor do Bonfim'
            status='para Adoção'
            size='P'

          />
        </ContentSlidePet>

        <TextCountPetsLost>Quantidade de pets perdidos  90.</TextCountPetsLost>
        <Button style={{width:200}}>
            Ver mais.
        </Button>
      </ContainerLostPet>

      <ContainerPositionMapOngs>
        <TextPositionsMapOngs>
        Veja ongs proximos a você.
        </TextPositionsMapOngs>

        <ContainerMap id="mapid">
          <MapContainer
            center={[-11.2002747, -40.5228873]}
            style={{
              width: "90%",
              height: 420,
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
      </ContainerPositionMapOngs>

    </Container>
    <Footer>
      <ImageFooterBackgound
        src={backGroundFooter}
      />
    </Footer>
    </ConatinerMain>
  );
}

export default Home;
