import { useCallback, useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import {Form} from '@unform/web';
import {FormHandles} from '@unform/core';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import {useAuth} from '../../hooks/AuthContext';
import Modal from 'react-modal';
import { FiArrowRight, FiX } from 'react-icons/fi';

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
  ContainerTypeSearch,
  LabelInputRadio,
  InputRadio,
  ContainerSelectFilterSearch,
  ButtonSearch,
  Divisor,
  ContainerLostPet,
  ContainerTitleLostPet,
  ContentSlidePet,
  TitleLostPet,
  TextCountPetsLost,
  ContainerFilterPetLost,
  TextFilterPetLost,
  ContainerPositionMapOngs,
  TextPositionsMapOngs,
  ContainerMap,
  ContainerModal,
  HeaderModal,
  TitleModal,
  MainModal,
  TextModal,
  FooterModal,
  ButtonCloseModal,
  Footer,
  ImageFooterBackgound,
  ContainerPoupMap,
  ImageOngPoup,
  NameOngPoup,
  ButtonViewOng
 } from './styles';

import imgDogCat from '../../assets/ImgDogCat.png';
import imgDog from '../../assets/ImgDog.png';
import divisor from '../../assets/divisor.png';
import backGroundFooter from '../../assets/imgfooter.png';
import IconMap from '../../utils/mapIcon';

import Button from '../../components/button';
import CardPets from '../../components/CardPet';
import Select from '../../components/select';
import Header from '../../components/header';
import api from '../../services/api';

interface IbgeUfResponse{
  sigla:string;
}
interface IbgeCityResponse{
  nome:string;
}

const optionsType = [
  {value:'dog', label:'Cachorros'},
  {value:'cat', label:'Gatos'},
  {value:'all', label:'Cachorros e Gatos'},
]

interface FIlerPetsProps{
  species?:string;
  city: string;
  uf: string;
}

interface PetProps{
  idPet:number;
  name:string;
  uf:string;
  city:string;
  phase:string;
  photo:string;
  sex:string;
  status:string;
}

interface FilterLostProps{
  uf:string;
  city:string;
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

interface OngsPositionsprops{
  idUser:number;
  name:string;
  photoProfile:string;
  lat:string;
  long:string;
}

function Home(){
  const history = useHistory();

  const {token} = useAuth();

  // const [position, setPosition] = useState({ lat:-11.2020652,lng:-40.521877});

  const formRef = useRef<FormHandles>(null);

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities,setCities] = useState<string[]>([]);

  const [typeSearch,seTypeSearch] = useState('pet');
  const [typeSearchPet,setTypeSearchPet] = useState(true);

  const [petLost,setPetLost] = useState<PetProps[]>([])

  const [ongPotions,setOngPositions] = useState<OngsPositionsprops[]>([]);

  const [filterPetLost, setFilterPetLost] = useState(false);

  const [modalIsOpen,setIsOpen] = useState(false);

  const [erros,setErros] = useState('');

  useEffect(()=>{
    typeSearch === 'pet' || typeSearch === '' ? (
      setTypeSearchPet(true)
    ): setTypeSearchPet(false)

  },[typeSearch]);

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

  useEffect(()=>{
    api.get('v1/pets/lost/oldest')
      .then(res =>{
        setPetLost(res.data);
      }).catch(err =>{
        console.log(err.response.data.result.mensagem)
      });

  },[]);

  useEffect(()=>{
    api.get('v1/user/searchLocation')
      .then(res =>{
        setOngPositions(res.data);
        console.log(res.data);
      }).catch(err =>{
        console.log(err.response.data.result.mensagem)
      });

  },[]);

  function handleSelect(ev:any){
    const value = ev.value;
    setSelectedUf(value);
  }

  // function LocationMarker(){

  //   const map = useMapEvents({
  //     click() {
  //       map.locate()
  //     },
  //     locationfound(e:any) {
  //       setPosition(e.latlng)
  //       map.flyTo(e.latlng, map.getZoom())
  //     },
  //   });

  //   return position === null ? null : (
  //     <Marker position={position}>
  //       <Popup>You are here</Popup>
  //     </Marker>
  //   )

  // }

  function handleFilterPetsOns(data:FIlerPetsProps){
    const dataPet = {typeSearch,page:1,...data}
    const {uf, city,species} = data;

    if(species === ''){
      setErros('Por favor, selecione um tipo de espécie para pesquisa.');
      setIsOpen(true);
      return;
    }

    if(uf === '' || city === ''){
      setErros('Por favor, selecione uma UF e cidade.');
      setIsOpen(true);
      return;
    }

    typeSearch  === 'pet'? (
      history.push('listPets',{...dataPet})
    ): history.push('ListOngs',{uf,city,typeSearch,page:1})

  }

  function handleNavigationSeeDetailsPet(idPet:number){
    history.push('seeDetailsPet',{idPet});
  }

  const getDataPetsLost = useCallback((data:FilterLostProps)=>{
    const {uf, city}= data;

    if(uf === '' || city === ''){
      setErros('Por favor, selecione uma UF e cidade.');
      setIsOpen(true);
      return;
    }

    history.push('lostPet',{...data,page:1,})
  },[history]);

  const  handleFilterLost = useCallback(()=>{
    setFilterPetLost((state) => !state)
  },[]);

  function handleisModal(){
    setIsOpen((state) => !state);
  }

  function handleNavigationListPets(idUser:number){
    history.push('listPetsOfOng',{idUser,page:1});
  }

  return(
    <ConatinerMain>
    <Container>
      <Header
        isUser={!!token}
      />
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
        <TextSearchPet>Procure por um pet ou ONG</TextSearchPet>
        <ContainerTypeSearch>
          <LabelInputRadio>
            <InputRadio
              name="status"
              type="radio"
              value="pet"
              onChange={(changeEvent)=> seTypeSearch(changeEvent.target.value)}
            />

              Pets
            </LabelInputRadio>

            <LabelInputRadio>
              <InputRadio
                name="status"
                type="radio"
                value="ong"
                onChange={(changeEvent)=> seTypeSearch(changeEvent.target.value)}
              />
              Ongs
            </LabelInputRadio>
        </ContainerTypeSearch>
        <ContainerSelectFilterSearch>
          <Form
            ref={formRef}
            onSubmit={handleFilterPetsOns}
            style={{
              display:'flex',
              width:'100%',

            }}
          >
            {typeSearchPet &&
              <Select
                name='species'
                placeholder='Selecione um tipo'
                options={optionsType}
                style={{width:'10%',marginRight:10}}
              />
            }

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
            onClick={()=> history.push('addnewpet')}
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
          {petLost.map(pet=>(
            <CardPets
              key={pet.idPet}
              namePet={pet.name}
              sexy='F'
              imagePet={pet.photo}
              city={`${pet.city} - ${pet.uf}`}
              status={pet.status === 'adoption' ? 'Para adoção' : 'Perdido'}
              size={pet.phase === 'adult' ? 'M' : 'G'}
              onClick={() => handleNavigationSeeDetailsPet(pet.idPet)}
            />
          ))}

        </ContentSlidePet>

        <TextCountPetsLost>Quantidade de pets perdidos {petLost.length}.</TextCountPetsLost>
        {filterPetLost ? (
          <>
            <TextFilterPetLost>Selecione um estado e cidade.</TextFilterPetLost>

            <ContainerFilterPetLost>
              <Form
                ref={formRef}
                onSubmit={getDataPetsLost}
                style={{
                  display:'flex',
                  width:'40%',

                }}
              >

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
                  Buscar pets
                </ButtonSearch>

              </Form>
            </ContainerFilterPetLost>
          </>
          ): (
            <>
            <Button
              onClick={handleFilterLost}
              style={{width:200}}
            >
                Ver mais.
              </Button>
            </>
          ) }
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

            {ongPotions.map((ong,index)=>(
              <Marker
                key={index}
                icon={IconMap}
                position={[parseInt(ong.lat),parseInt(ong.long)]}
              >
              <Popup closeButton={false}  className='map-popup'>
                <ContainerPoupMap>
                  <ImageOngPoup src={ong.photoProfile}/>
                  <NameOngPoup>{ong.name}</NameOngPoup>
                  <ButtonViewOng onClick={()=> handleNavigationListPets(ong.idUser)}>
                  <FiArrowRight size={25} color='#000'/>
                </ButtonViewOng>
                </ContainerPoupMap>
              </Popup>

              </Marker>
            ))}
          </MapContainer>
        </ContainerMap>
      </ContainerPositionMapOngs>

      <ContainerModal>
       <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
       >
          <HeaderModal>
            <TitleModal>Por favor complete os dados</TitleModal>
            </HeaderModal>
          <MainModal>
            <TextModal>* {erros}</TextModal>
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
    <Footer>
      <ImageFooterBackgound
        src={backGroundFooter}
      />
    </Footer>
    </ConatinerMain>
  );
}

export default Home;
