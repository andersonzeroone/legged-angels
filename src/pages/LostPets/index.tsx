import {Form} from '@unform/web';
import {useHistory, useLocation} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import imgDogToy from '../../assets/dogToy.png'
import imgType from '../../assets/imgType.png';
import imgStatus from '../../assets/imgStatus.png';
import imgSex from '../../assets/imgSex.png';
import imgPhase from '../../assets/imgPhase.png';

import Header from '../../components/header';
import SelectFilter from '../../components/selectFilter';
import CardPets from '../../components/CardPet';
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
  ButtonSearch
 } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api';

 const optionsType = [
  {value:'dog', label:'Cachorros.'},
  {value:'cat', label:'Gatos.'},
  {value:'all', label:'Todos.'},
]

const optionsStatus = [
  {value:'adoption', label:'Para adoção.'},
  {value:'lost', label:'Perdido.'},
  {value:'Todos', label:'Todos.'},
]

const optionsSex = [
  {value:'male', label:'Macho'},
  {value:'female', label:'Fêmea.'},
  {value:'all', label:'Todos.'},
]

const optionsPhase = [
  {value:'puppy', label:'Filhote'},
  {value:'adult', label:'Adulto.'},
  {value:'all', label:'Todos.'},
]


interface RouteParms{
  uf: string;
  city:string;
  page:number;
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
const LostPets: React.FC = () => {
  const history = useHistory();

  const route = useLocation();
  const data = route.state as RouteParms;

  const [lostPets, setLostPets] = useState<PetProps[]>([])

  function handleNavigationListPet(){
    history.push('seeDetailsPet');
  }

  useEffect(()=>{
    api.get('v1/pets/lost/searchLocation',{
      params:{
        city:data.city,
        uf:data.uf,
        page:data.page
      }
    })
      .then(res=>{
        setLostPets(res.data);

      }).catch(err => {
        console.log(err.response.data.result);
      })
  },[data])

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

        <Title>Animais perdidos</Title>

        <ContainerFilter>
           <Form
            onSubmit={()=>{}}
            style={{
              display:'flex',
              // width:'70%',
            }}
          >
          <SelectFilter
            options={optionsType}
            name='type'
            iconImg={imgType}
            placeholder='Tipo'
          />

          <SelectFilter
            options={optionsStatus}
            name='status'
            iconImg={imgStatus}
            placeholder='Status'
          />

          <SelectFilter
            options={optionsSex}
            name='sex'
            iconImg={imgSex}
            placeholder='Gênero'
          />

          <SelectFilter
            options={optionsPhase}
            name='phase'
            iconImg={imgPhase}
            placeholder='Fase'
          />

          <ButtonSearch to='/'>
            <FiSearch size={20} style={{marginRight:5}}/>
            Pesquisar pet
          </ButtonSearch>
          </Form>
        </ContainerFilter>

        <ContainerCards>
          {lostPets.map(pet=>(
            <CardPets
              key={pet.idPet}
              namePet={pet.name}
              sexy='F'
              imagePet={pet.photo}
              city={`${pet.city} - ${pet.uf}`}
              status={pet.status === 'adoption' ? 'Para adoção' : 'Perdido'}
              size={pet.phase === 'adult' ? 'P' : 'M'}
              onClick={handleNavigationListPet}
            />
          ))}

        </ContainerCards>
        <ContainerPagination/>
      </Container>
      <Footer/>
    </>
  )
}

export default LostPets;
