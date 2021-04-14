import {Form} from '@unform/web';
import {useHistory, useLocation} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';
import axios from 'axios';
import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';

import imgDogToy from '../../assets/dogToy.png'

import Header from '../../components/header';
import SelectFilter from '../../components/selectFilter';
import CardOngs from '../../components/CardOng';
import Footer from '../../components/footer';

import {
  Container,
  ContainerSlide,
  ContentSlide,
  ImageDog,
  TextSlide,
  Title,
  ContainerFilter,
  ContainerCards,
  ContainerPagination,
  ButtonSearch,
  ContainerModal,
  HeaderModal,
  TitleModal,
  MainModal,
  TextModal,
  FooterModal,
  ButtonCloseModal,
 } from './styles';

interface RouteParms{
  uf: string;
  city:string;
  typeSearch:string;
  page:number;
}

interface OngProps{
  idUser:number;
  name:string;
  uf:string;
  city:string;
  photoProfile:string;
}

interface IbgeUfResponse{
  sigla:string;
}
interface IbgeCityResponse{
  nome:string;
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

interface FilterOngsProps{
  uf:string;
  city:string;
}

const ListOngs: React.FC = () => {
  const history = useHistory();

  const route = useLocation();
  const data = route.state as RouteParms;

  const [ufs, setUfs] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('');
  const [cities,setCities] = useState<string[]>([]);

  const [ongs, setOngs] = useState<OngProps[]>([]);

  const [modalIsOpen,setIsOpen] = useState(false);

  const [erros,setErros] = useState('');

  useEffect(()=>{
    api.get('/v1/searchLocation',{
      params:{
        city:data.city,
        uf:data.uf,
        typeSearch:data.typeSearch,
        page:1
      }
    })
      .then(res=>{
        console.log(res.data);
        setOngs(res.data);

      }).catch(err => {
        console.log(err.response.data.result.mensagem);
      })
  },[data])

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

  function handleNavigationListPets(idOng:number){
    console.log('id', idOng)
    history.push('listPets',{idOng});
  }

  const getDataFilter = useCallback(async(data:FilterOngsProps)=>{
    const {uf, city}= data;

    if(uf === '' || city === ''){
      setErros('Por favor, selecione uma UF e cidade.');
      setIsOpen(true);
      return;
    }
    try{

      const response =  await api.get('/v1/searchLocation',{
        params:{
          city:data.city,
          uf:data.uf,
          typeSearch:'ong',
          page:1
        }
      });

      setOngs(response.data);

    }catch(err){
      console.log(err.response.data.result.mensagem);
    }

  },[]);

  function handleisModal(){
    setIsOpen((state) => !state);
  }

  return(
    <>
      <Container>
        <Header/>

        <ContainerSlide>
          <ImageDog src={imgDogToy}/>
          <ContentSlide>
            <TextSlide>
              Oferecemos alguns serviços como procurar
              animais que estão para adoção,
              ONGs ou até mesmo uma lista de animais perdidos.
            </TextSlide>
          </ContentSlide>
        </ContainerSlide>

        <Title>Lista de Ongs</Title>

        <ContainerFilter>
           <Form
            onSubmit={getDataFilter}
            style={{
              display:'flex',
              // width:'40%',
            }}
          >

          <SelectFilter
            name='uf'
            placeholder='Selecione sua UF'
            options={ufs.map(uf=>({label:uf,value:uf}))}
            onChange={handleSelect}
          />

          <SelectFilter
            name='city'
            placeholder='Selecione a cidade'
            options={cities.map(citie=>({label:citie,value:citie}))}
          />

          <ButtonSearch type='submit'>
            <FiSearch size={20} style={{marginRight:5}}/>
            Pesquisar ong
          </ButtonSearch>
          </Form>
        </ContainerFilter>

        <ContainerCards>
          {ongs.map(ong=>(
            <CardOngs
              key={ong.idUser}
              nameOng={ong.name}
              imageOng={ong.photoProfile}
              city={`${ong.city} - ${ong.uf}`}
              onClick={()=> handleNavigationListPets(ong.idUser)}
            />
          ))}

        </ContainerCards>
        <ContainerPagination/>
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
              <TextModal>{erros}</TextModal>
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
      <Footer/>
    </>
  )
}

export default ListOngs;
