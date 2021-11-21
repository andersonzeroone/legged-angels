import { Form } from "@unform/web";
import { useHistory, useLocation } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { FiSearch, FiX } from "react-icons/fi";
import Modal from "react-modal";

import imgDogToy from "../../assets/dogToy.png";
import imgType from "../../assets/imgType.png";
import imgStatus from "../../assets/imgStatus.png";
import imgSex from "../../assets/imgSex.png";
import imgPhase from "../../assets/imgPhase.png";
import notFound from "../../assets/notFound.png";

import Header from "../../components/header";
import SelectFilter from "../../components/selectFilter";
import CardPets from "../../components/CardPet";
import Footer from "../../components/footer";

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
  ContainerNotLostPetParmsFilter,
  TitleNotLostPetParmsFilter,
  ImageNotLostPetParmsFilter,
} from "./styles";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 20,
    width: "50%",
  },
};

const optionsType = [
  { value: "dog", label: "Cachorros." },
  { value: "cat", label: "Gatos." },
  { value: "all", label: "Todos." },
];

const optionsStatus = [
  { value: "adoption", label: "Para adoção." },
  { value: "lost", label: "Perdido." },
  { value: "", label: "Todos." },
];

const optionsSex = [
  { value: "male", label: "Macho" },
  { value: "female", label: "Fêmea." },
  { value: "", label: "Todos." },
];

const optionsPhase = [
  { value: "puppy", label: "Filhote" },
  { value: "adult", label: "Adulto." },
  { value: "elderly", label: "Idoso." },
  { value: "", label: "Todos." },
];

interface RouteParms {
  uf: string;
  city: string;
  page: number;
}

interface PetProps {
  idPet: number;
  name: string;
  uf: string;
  city: string;
  phase: string;
  photo: string;
  sex: string;
  status: string;
}

interface LostPetProps {
  species: string;
  status: string;
  sex: string;
  phase: string;
}

const LostPets: React.FC = () => {
  const history = useHistory();

  const route = useLocation();
  const dataParms = route.state as RouteParms;

  const [lostPets, setLostPets] = useState<PetProps[]>([]);

  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);
  const [erros, setErros] = useState("");

  const [isLostPets,setIsLostPet] = useState(false);

  function handleNavigationSeeDetailsPet(idPet: number) {
    history.push("seeDetailsPet", { idPet });
  }

  useEffect(() => {
    api
      .get("v1/pets/lost/searchLocation", {
        params: {
          city: dataParms.city,
          uf: dataParms.uf,
          page: dataParms.page,
        },
      })
      .then((res) => {
        setLostPets(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.result);
      });
  }, [dataParms]);

  const handleData = useCallback(
    async (data: LostPetProps) => {
      try {
        const response = await api.get("/v1/pet/filter", {
          params: {
            species: data.species,
            status: data.status,
            sex: data.sex,
            phase: data.phase,
            uf: dataParms.uf,
            city: dataParms.city,
            page: 1,
          },
        });

        if (response.data) {
          setIsLostPet(true);
        }
        setLostPets(response.data);
      } catch (err) {
        setErros(err.response.data.result.mensagem);
        console.log(err.response.data.result.mensagem);
      }
    },
    [dataParms]
  );

  function handleisModalError() {
    setModalErrorIsOpen((state) => !state);
  }

  return (
    <>
      <Container>
        <Header />
        <ContainerSlide>
          <ImageDog src={imgDogToy} />
          <ContentSlide>
            <TextSlide>
              Oferecemos alguns serviços como procurar animais que estão para
              adoção, ONGs ou até mesmo uma lista de animais perdidos.
            </TextSlide>
          </ContentSlide>
        </ContainerSlide>

        <Title>Animais perdidos</Title>

        <ContainerFilter>
          <Form
            onSubmit={handleData}
            style={{
              display: "flex",
              // width:'70%',
            }}
          >
            <SelectFilter
              options={optionsType}
              name="species"
              iconImg={imgType}
              placeholder="Tipo"
            />

            <SelectFilter
              options={optionsStatus}
              name="status"
              iconImg={imgStatus}
              placeholder="Status"
            />

            <SelectFilter
              options={optionsSex}
              name="sex"
              iconImg={imgSex}
              placeholder="Gênero"
            />

            <SelectFilter
              options={optionsPhase}
              name="phase"
              iconImg={imgPhase}
              placeholder="Fase"
            />

            <ButtonSearch type="submit">
              <FiSearch size={20} style={{ marginRight: 5 }} />
              Pesquisar pet
            </ButtonSearch>
          </Form>
        </ContainerFilter>
        {!isLostPets ? (
          <>
            <ContainerCards>
              {lostPets.map((pet) => (
                <CardPets
                  key={pet.idPet}
                  namePet={pet.name}
                  sexy="F"
                  imagePet={pet.photo}
                  city={`${pet.city} - ${pet.uf}`}
                  status={pet.status === "adoption" ? "Para adoção" : "Perdido"}
                  size={pet.phase === "adult" ? "P" : "M"}
                  onClick={() => handleNavigationSeeDetailsPet(pet.idPet)}
                />
              ))}
            </ContainerCards>
          </>
        ) : (
          <ContainerNotLostPetParmsFilter>
            <TitleNotLostPetParmsFilter>
              Não encontramos nenhum pet para esse filtro.
            </TitleNotLostPetParmsFilter>
            <ImageNotLostPetParmsFilter src={notFound} />
          </ContainerNotLostPetParmsFilter>
        )}

        <ContainerModal>
          <Modal
            isOpen={modalErrorIsOpen}
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
              <ButtonCloseModal onClick={handleisModalError}>
                <FiX size={20} style={{ marginRight: 10 }} />
                Fechar
              </ButtonCloseModal>
            </FooterModal>
          </Modal>
        </ContainerModal>
        <ContainerPagination />
      </Container>
      <Footer />
    </>
  );
};

export default LostPets;
