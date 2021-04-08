import React,{ButtonHTMLAttributes} from 'react';
import {FiArrowRight} from 'react-icons/fi';

 import {
  Container,
  Imagepet,
  ImageSexyPet,
  ContainerName,
  ContainerInfoPet,
  NamePet,
  TextInfoPet,
  IconInfo,
  FooterCardPet,
  ContainerSizePet,
  CardSizePetP,
  CardSizePetM,
  CardSizePetG,
  TextSizePet,
  ContainerViewPet,
  TextViewPet,
  ContainerButton
  } from './styles';

import imgPinMap from '../../assets/pinMap.png';
import imgStatus from '../../assets/kiss.png';
import imgSexPetM from '../../assets/imgSexo.png';
import imgSexyPetF from '../../assets/imgSexyF.png';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface CardPetProps{
  city:string;
  status:string;
  namePet:string;
  imagePet:string;
  sexy:string;
  size:string;
}

type ButtonCardProps = ButtonProps & CardPetProps
const CardPet: React.FC<ButtonCardProps> = ({
  imagePet,
  namePet,
  sexy,
  city,
  status,
  size,
  ...rest
}) => {
  return(
    <>
      <Container>
        <Imagepet
          src={imagePet}
        />

        <ContainerName>
          <NamePet>{namePet}</NamePet>
          {sexy === 'M' ? (
            <ImageSexyPet
              src={imgSexPetM}
           />
          ):(
              <ImageSexyPet
                src={imgSexyPetF}
              />
            )
          }
        </ContainerName>

        <ContainerInfoPet>
          <IconInfo
            src={imgPinMap}
          />
          <TextInfoPet>{city}</TextInfoPet>
        </ContainerInfoPet>

        <ContainerInfoPet>
          <IconInfo
            src={imgStatus}
          />
          <TextInfoPet>Status:{status}</TextInfoPet>
        </ContainerInfoPet>

        <FooterCardPet>
          <ContainerSizePet>
            <CardSizePetP size={size}>
              <TextSizePet>P</TextSizePet>
            </CardSizePetP>

            <CardSizePetM size={size}>
              <TextSizePet>M</TextSizePet>
            </CardSizePetM>

            <CardSizePetG size={size}>
              <TextSizePet>G</TextSizePet>
            </CardSizePetG>
          </ContainerSizePet>

          <ContainerViewPet>
            <ContainerButton  {...rest}>
              <TextViewPet>Ver mais</TextViewPet>
              <FiArrowRight color='#104B60'/>
            </ContainerButton>
          </ContainerViewPet>

        </FooterCardPet>
      </Container>
    </>
  )
}

export default CardPet;
