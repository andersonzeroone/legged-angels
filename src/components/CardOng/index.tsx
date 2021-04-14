import React,{ButtonHTMLAttributes} from 'react';
import {FiArrowRight} from 'react-icons/fi';

 import {
  Container,
  ImageOng,
  ContainerInfoOng,
  NameOng,
  TextInfoOng,
  IconInfo,
  FooterCardOng,
  ContainerViewOng,
  TextViewOng,
  ContainerButton
  } from './styles';

import imgPinMap from '../../assets/pinMap.png';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

interface CardOngProps{
  city:string;
  nameOng:string;
  imageOng:string;
}

type ButtonCardProps = ButtonProps & CardOngProps
const CardOng: React.FC<ButtonCardProps> = ({
  imageOng,
  nameOng,
  city,
  ...rest
}) => {
  return(
    <>
      <Container>
        <ImageOng
          src={imageOng}
        />

        <ContainerInfoOng>
          <NameOng>{nameOng}</NameOng>
        </ContainerInfoOng>

        <ContainerInfoOng>

          <IconInfo
            src={imgPinMap}
          />
          <TextInfoOng>{city}</TextInfoOng>
        </ContainerInfoOng>

        <ContainerInfoOng>

        </ContainerInfoOng>

        <FooterCardOng>
          <ContainerViewOng>
            <ContainerButton  {...rest}>
              <TextViewOng>Ver mais</TextViewOng>
              <FiArrowRight color='#104B60'/>
            </ContainerButton>
          </ContainerViewOng>

        </FooterCardOng>
      </Container>
    </>
  )
}

export default CardOng;
