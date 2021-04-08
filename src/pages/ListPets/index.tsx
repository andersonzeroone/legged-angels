import {Form} from '@unform/web';
import {useHistory} from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import imgDogToy from '../../assets/dogToy.png'
import imgPet from '../../assets/imgPet.png';
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
const ListPets: React.FC = () => {
  const history = useHistory();

  function handleNavigationListPet(){
    history.push('listPets');
  }

  return(
    <>
      <Container>
        <Header/>

        <ContainerSlide>
          <ImageDog src={imgDogToy}/>
          <ContentSlide>
            <TextSlide>
              Oferecemos alguns serviçõs como procurar
              animais que estão para adoção,
              ONGs ou até mesmo uma lista de animais perdidos.
            </TextSlide>
          </ContentSlide>
        </ContainerSlide>

        <Title>Adote um pet</Title>

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
        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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
        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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

        <CardPets
          namePet='Logan'
          sexy='F'
          imagePet={imgPet}
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
        </ContainerCards>
        <ContainerPagination/>
      </Container>
      <Footer/>
    </>
  )
}

export default ListPets;
