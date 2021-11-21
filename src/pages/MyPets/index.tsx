import { Form } from "@unform/web";
import { useHistory } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";
import { FiSearch, FiX } from "react-icons/fi";
import Modal from "react-modal";
import { useAuth } from "../../hooks/AuthContext";

// import imgDogToy from "../../assets/dogToy.png";
import imgType from "../../assets/imgType.png";
import imgStatus from "../../assets/imgStatus.png";
import imgSex from "../../assets/imgSex.png";
import imgPhase from "../../assets/imgPhase.png";
import notFound from "../../assets/notFound.png";
import imgLogon from "../../assets/imgLogon.png";

import Button from "../../components/button";
import Header from "../../components/header";
import SelectFilter from "../../components/selectFilter";
import CardMyPets from "../../components/CardMyPet";
import Footer from "../../components/footer";

import {
  Container,
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
  ContainerLogon,
  TitleLogon,
  ImageLogon,
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
  { value: "Todos", label: "Todos." },
];

const optionsSex = [
  { value: "male", label: "Macho" },
  { value: "female", label: "Fêmea." },
  { value: "all", label: "Todos." },
];

const optionsPhase = [
  { value: "puppy", label: "Filhote" },
  { value: "adult", label: "Adulto." },
  { value: "all", label: "Todos." },
];

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

interface FilterPetProps {
  species: string;
  status: string;
  sex: string;
  phase: string;
}
const MyPets: React.FC = () => {
  const { token } = useAuth();

  const history = useHistory();

  const [pets, setPets] = useState<PetProps[]>([]);

  const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false);

  const [erros, setErros] = useState("");

  const [isLostPets, setIsLostPet] = useState(false);

  // function handleNavigationSeeDetailsPet(idPet: number) {
  //   console.log("id", idPet);
  //   history.push("seeDetailsPet", { idPet });
  // }

  useEffect(() => {

    setIsLostPet(false);

    if(!!token){
      api
        .get("v1/pets/ofUserAuth", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            page: 1,
          },
        })
        .then((res) => {
          console.log(res.data);
          setPets(res.data);
        })
        .catch((err) => {
          console.log(err.response.data.result.mensagem);
        });
    }
  }, [token]);

  const handleData = useCallback(async (dataForm: FilterPetProps) => {
    try {
      const response = await api.get("/v1/pet/filter", {
        params: {
          species: dataForm.species,
          status: dataForm.status,
          sex: dataForm.sex,
          phase: dataForm.phase,
          page: 1,
        },
      });

      // if (response.data.lenght = 0) {
      //   setIsLostPet(true);
      //   return;
      // }
      setPets(response.data);
    } catch (err) {
      setErros(err.response.data.result.mensagem);
      console.log(err.response.data.result.mensagem);
    }
  }, []);

  function handleisModalError() {
    setModalErrorIsOpen((state) => !state);
  }

  return (
    <>
      <Container>
        <Header isUser={!!token} />
        <Title>Seus pets</Title>
        {!!token ? (
          <>
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
                  {pets.map((pet) => (
                    <CardMyPets
                      key={pet.idPet}
                      namePet={pet.name}
                      sexy="F"
                      imagePet={pet.photo}
                      city={`${pet.city} - ${pet.uf}`}
                      status={
                        pet.status === "adoption" ? "Para adoção" : "Perdido"
                      }
                      size={pet.phase === "adult" ? "P" : "M"}
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
          </>
        ) : (
          <>
            <ContainerLogon>
              <TitleLogon>
                Para ver seus pets é preciso fazer login.
              </TitleLogon>
              <ImageLogon src={imgLogon} />

              <Button
                onClick={() => history.push("signIn")}
                style={{ width: "50%" }}
              >
                Login/Cadastro
              </Button>
            </ContainerLogon>
          </>
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

export default MyPets;
