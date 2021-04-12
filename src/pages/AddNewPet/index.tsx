import React, { ChangeEvent, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import {useHistory} from 'react-router-dom';
import Modal from "react-modal";
import { FiArrowLeft, FiPlus, FiType, FiX } from "react-icons/fi";
import api from "../../services/api";
import { useAuth } from "../../hooks/AuthContext";

import getValidationErrors from "../../utils/getValidationErrors";

import imgLogon from "../../assets/imgLogon.png";

import Button from "../../components/button";
import Input from "../../components/input";

import {
  Container,
  Header,
  Title,
  Content,
  Legend,
  ContainerInfo,
  ContentInfo,
  InfoAdditional,
  ContainerRadio,
  LabelInputRadio,
  InputRadio,
  Label,
  ContainerButton,
  ContainerImages,
  ContentImage,
  ImagePreview,
  ContainerPhotoButtonDelete,
  ButtonImage,
  Image,
  ButtonDeletePhoto,
  ContainerButtonAddPhoto,
  ButtonAddPhoto,
  TextButtonAddPhoto,
  ButtonFinsh,
  ContainerModal,
  HeaderModal,
  TitleModal,
  MainModal,
  TextModal,
  FooterModal,
  ButtonCloseModal,
  ContainerLogon,
  TitleLogon,
  ImageLogon,
} from "./styles";

interface PetProps {
  name: string;
  race: string;
  hairColor: string;
  eyeColor: string;
  status: string;
  sex: string;
  species: string;
  phase: string;
  vaccination: string;
  castration: string;
  feature: string;
}

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

const AddNewPet: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { token } = useAuth();

  const [status, setStatus] = useState("");
  const [sex, setSex] = useState("");
  const [species, setSpecies] = useState("");
  const [phase, setPhase] = useState("");
  const [vaccination, setVaccination] = useState("");
  const [castration, setCastration] = useState("");
  const [feature, setFeature] = useState("");

  const [images, setImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [activeImageindex, setActiveImageindex] = useState(0);

  const [errosForm, setErrosForm] = useState("");

  const [modalIsOpen, setIsOpen] = useState(false);

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    if (previewImages.length === 5) {
      return;
    }

    const selecteImages = Array.from(event.target.files);
    setImages([...selecteImages, ...images]);

    const selectImagesPreview = selecteImages.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages([...selectImagesPreview, ...previewImages]);
  }

  function handleDeletePhoto(id: number) {
    console.log(id);

    const arrayPreveiw = previewImages;

    const previewFilter = arrayPreveiw.filter((img, index) => index !== id);

    const newImagesFile = images.slice(id, 1);

    setImages(newImagesFile);
    setPreviewImages(previewFilter);
  }

  async function handleSubmit(data: PetProps) {
    console.log(data);
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("Por favor informe o nome do pet"),
        race: Yup.string().required("Por favor informe a raça do pet"),
        hairColor: Yup.string().required("Por favor informe a cor do pelo"),
        eyeColor: Yup.string().required("Por favor informe a cor dos olhos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const newData = {
        ...data,
        status,
        sex,
        species,
        phase,
        vaccination,
        castration,
        feature,
      };

      const dataPet = new FormData();

      dataPet.append("name", newData.name);
      dataPet.append("race", newData.race);
      dataPet.append("hairColor", newData.hairColor);
      dataPet.append("eyeColor", newData.eyeColor);
      dataPet.append("status", newData.status);
      dataPet.append("sex", newData.sex);
      dataPet.append("species", newData.species);
      dataPet.append("phase", newData.phase);
      dataPet.append("vaccination", newData.vaccination);
      dataPet.append("castration", newData.castration);
      dataPet.append("feature", newData.feature);

      images.forEach((photosPet) => {
        dataPet.append("photos", photosPet);
      });

      await api.post("/v1/user/register", dataPet);

      console.log(newData);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const erros = getValidationErrors(err);
        formRef.current?.setErrors(erros);
        setIsOpen(true);
        return;
      }

      console.log("dateErros", err.response.data.result.mensagem);
      setErrosForm(err.response.data.result.mensagem);
      setIsOpen(true);
      return;
    }
  }

  function handleisModal() {
    setIsOpen((state) => !state);
  }

  return (
    <Container>
      <Header>
        <Link to="/">
          <FiArrowLeft style={{ marginRight: 5 }} />
          Voltar
        </Link>
      </Header>
      <Title>Cadastrar pet</Title>

      <Content>
        {!!token ? (
          <>
            <Legend>Dados:</Legend>

            <Form ref={formRef} onSubmit={handleSubmit}>
              <ContainerInfo>
                <ContentInfo>
                  <Label>Nome</Label>
                  <Input
                    name="name"
                    type="text"
                    icon={FiType}
                    placeholder="Informe o nome de seu pet"
                  />
                </ContentInfo>

                <ContentInfo>
                  <Label>Raça</Label>
                  <Input
                    name="race"
                    type="text"
                    icon={FiType}
                    placeholder="Informe a raça de seu pet"
                  />
                </ContentInfo>
              </ContainerInfo>
              <ContainerRadio>
                <Label>status do pet</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="status"
                    type="radio"
                    value="adoption"
                    onChange={(changeEvent) =>
                      setStatus(changeEvent.target.value)
                    }
                  />
                  Para Adoção
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="status"
                    type="radio"
                    value="lost"
                    onChange={(changeEvent) =>
                      setStatus(changeEvent.target.value)
                    }
                  />
                  Perdido
                </LabelInputRadio>
              </ContainerRadio>

              <Legend>Informações sobre o pet</Legend>

              <ContainerRadio>
                <Label>Sexo</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="sex"
                    type="radio"
                    value="male"
                    onChange={(changeEvent) => setSex(changeEvent.target.value)}
                  />
                  Para Adoção
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="sex"
                    type="radio"
                    value="female"
                    onChange={(changeEvent) => setSex(changeEvent.target.value)}
                  />
                  Perdido
                </LabelInputRadio>
              </ContainerRadio>

              <ContainerRadio>
                <Label>Especie</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="species"
                    type="radio"
                    value="dog"
                    onChange={(changeEvent) =>
                      setSpecies(changeEvent.target.value)
                    }
                  />
                  Cachoro
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="species"
                    type="radio"
                    value="cat"
                    onChange={(changeEvent) =>
                      setSpecies(changeEvent.target.value)
                    }
                  />
                  Gato
                </LabelInputRadio>
              </ContainerRadio>

              <ContainerRadio>
                <Label>Fase</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="phase"
                    type="radio"
                    value="puppy"
                    onChange={(changeEvent) =>
                      setPhase(changeEvent.target.value)
                    }
                  />
                  Filhote
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="pahse"
                    type="radio"
                    value="adult"
                    onChange={(changeEvent) =>
                      setPhase(changeEvent.target.value)
                    }
                  />
                  Adulto
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="phase"
                    type="radio"
                    value="elderly"
                    onChange={(changeEvent) =>
                      setPhase(changeEvent.target.value)
                    }
                  />
                  Idoso
                </LabelInputRadio>
              </ContainerRadio>

              <ContainerRadio>
                <Label>Situação das vacinas</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="vaccination"
                    type="radio"
                    value="Vacinado"
                    onChange={(changeEvent) =>
                      setVaccination(changeEvent.target.value)
                    }
                  />
                  Vacinado
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="vaccination"
                    type="radio"
                    value="Não vacinado"
                    onChange={(changeEvent) =>
                      setVaccination(changeEvent.target.value)
                    }
                  />
                  Não vacinado
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="vaccination"
                    type="radio"
                    value="Sem informação"
                    onChange={(changeEvent) =>
                      setVaccination(changeEvent.target.value)
                    }
                  />
                  Sem informação
                </LabelInputRadio>
              </ContainerRadio>

              <ContainerRadio>
                <Label>Situação da castração</Label>
                <LabelInputRadio>
                  <InputRadio
                    name="castration"
                    type="radio"
                    value="Castrado"
                    onChange={(changeEvent) =>
                      setCastration(changeEvent.target.value)
                    }
                  />
                  Castrado
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="castration"
                    type="radio"
                    value="Não Castrado"
                    onChange={(changeEvent) =>
                      setCastration(changeEvent.target.value)
                    }
                  />
                  Não castrado
                </LabelInputRadio>

                <LabelInputRadio>
                  <InputRadio
                    name="castration"
                    type="radio"
                    value="Sem Informação"
                    onChange={(changeEvent) =>
                      setCastration(changeEvent.target.value)
                    }
                  />
                  Sem informação
                </LabelInputRadio>
              </ContainerRadio>

              <Legend>Informações adicionais</Legend>

              <ContainerInfo>
                <ContentInfo>
                  <Label>Cor do pelo</Label>
                  <Input
                    name="hairColor"
                    type="text"
                    icon={FiType}
                    placeholder="Ex: Todo preto"
                  />
                </ContentInfo>

                <ContentInfo>
                  <Label>Cor dos olhos</Label>
                  <Input
                    name="eyeColor"
                    type="text"
                    icon={FiType}
                    placeholder="Ex: tudo azul"
                  />
                </ContentInfo>
              </ContainerInfo>

              <ContentInfo style={{ marginTop: 40 }}>
                <Label>Informações adicionais(opcional)</Label>
                <InfoAdditional
                  name="feature"
                  maxLength={300}
                  onChange={(changeEvent) =>
                    setFeature(changeEvent.target.value)
                  }
                />
              </ContentInfo>

              <Legend>Fotos</Legend>
              <ContainerImages>
                <ImagePreview src={previewImages[activeImageindex]} />

                <ContentImage>
                  {previewImages.map((image, index) => {
                    return (
                      <>
                        <ContainerPhotoButtonDelete>
                          <ButtonImage
                            className={
                              activeImageindex === index ? "active" : ""
                            }
                            key={image}
                            onClick={() => {
                              setActiveImageindex(index);
                            }}
                          >
                            <Image src={image} />
                          </ButtonImage>
                          <ButtonDeletePhoto
                            onClick={() => handleDeletePhoto(index)}
                          >
                            Excluir
                          </ButtonDeletePhoto>
                        </ContainerPhotoButtonDelete>
                      </>
                    );
                  })}
                  <ContainerButtonAddPhoto>
                    <ButtonAddPhoto htmlFor="image[]">
                      <FiPlus size={50} color="#15b6d6" />
                    </ButtonAddPhoto>
                    <TextButtonAddPhoto>Adicionar</TextButtonAddPhoto>
                  </ContainerButtonAddPhoto>
                </ContentImage>
              </ContainerImages>

              <ContainerButton>
                <ButtonFinsh>
                  <Button type="submit">Finalizar</Button>
                  <input
                    id="image[]"
                    type="file"
                    multiple
                    onChange={handleSelectImages}
                    style={{ display: "none" }}
                  />
                </ButtonFinsh>
              </ContainerButton>
            </Form>
          </>
        ) : (
          <>
            <ContainerLogon>
              <TitleLogon>Para cadastrar um pet é preciso fazer login.</TitleLogon>
              <ImageLogon src={imgLogon} />

              <Button
                onClick={() => history.push('signIn')}
                style={{width:'50%'}}
              >
                Login/Cadastro
              </Button>
            </ContainerLogon>
          </>
        )}
      </Content>
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
            <TextModal>{errosForm}</TextModal>
          </MainModal>
          <FooterModal>
            <ButtonCloseModal onClick={handleisModal}>
              <FiX size={20} style={{ marginRight: 10 }} />
              Fechar
            </ButtonCloseModal>
          </FooterModal>
        </Modal>
      </ContainerModal>
    </Container>
  );
};

export default AddNewPet;
