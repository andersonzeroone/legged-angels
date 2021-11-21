import {Form} from '@unform/web';
import {useHistory, useLocation} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

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
  idUser:number;
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

interface FilterPetProps {
  species: string;
  status: string;
  sex: string;
  phase: string;
}

const ListPetsOfOng: React.FC = () => {
  const history = useHistory();

  const route = useLocation();
  const data = route.state as RouteParms;

  const [pets, setPets] = useState<PetProps[]>([])

  function handleNavigationSeeDetailsPet(idPet:number){
    history.push('seeDetailsPet',{idPet});
  }

  useEffect(()=>{
    api.get('/v1/pets/searchOng',{
      params:{
        idUser:data.idUser,
        page:data.page
      }
    })
      .then(res=>{
        setPets(res.data);

      }).catch(err => {
        console.log(err.response.data.result.mensagem);
      })
  },[data])

  const handleData = useCallback(async(dataForm:FilterPetProps)=>{
    try{
      const response = await api.get('v1/pet/filterByUser',{
        params:{
          idUser:data.idUser,
          species: dataForm.species,
          status: dataForm.status,
          sex: dataForm.sex,
          phase: dataForm.phase,
          page: 1,
        }
      })
      setPets(response.data);
    }catch(err){

    }
  },[data.idUser]);

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

        <Title>Lista de pets da ong</Title>

        <ContainerFilter>
           <Form
            onSubmit={handleData}
            style={{
              display:'flex',
              // width:'70%',
            }}
          >
          <SelectFilter
            options={optionsType}
            name='species'
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

          <ButtonSearch type='submit'>
            <FiSearch size={20} style={{marginRight:5}}/>
            Pesquisar pet
          </ButtonSearch>
          </Form>
        </ContainerFilter>

        <ContainerCards>
          {pets.map(pet=>(
            <CardPets
              key={pet.idPet}
              namePet={pet.name}
              sexy='F'
              imagePet={pet.photo}
              city={pet.city}
              status={pet.status === 'adoption' ? 'Para adoção' : 'Perdido'}
              size={pet.phase === 'adult' ? 'P' : 'M'}
              onClick={()=> handleNavigationSeeDetailsPet(pet.idPet)}
            />
          ))}


        </ContainerCards>
        <ContainerPagination/>
      </Container>
      <Footer/>
    </>
  )
}

export default ListPetsOfOng;
