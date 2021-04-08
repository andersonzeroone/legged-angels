import styled, { css } from 'styled-components';

interface PetProps{
  size:string;
}

export const  Container = styled.div`
  width:200px;
  border-radius:10px;
  margin-bottom:80px;
  padding-bottom:10px;
  margin-right:80px;
  box-shadow: 0px 3px 5px 4px rgb(141, 140, 140);
`;

export const Imagepet = styled.img`
  width:100%;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
`

export const ImageSexyPet = styled.img`
  height:20px;
`;

export const ContainerName = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:0 10px;
  margin-top:4%;
`;

export const ContainerInfoPet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:flex-start;
  padding:0 10px;
  margin-top:4%;
`;

export const NamePet = styled.p`
  font-size:1.5rem;
  color:#104B60;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const TextInfoPet = styled.p`
  font-size:0.9rem;
  color:#104B60;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const IconInfo = styled.img`
  height:22px;
  margin-right:5px;
`;

export const FooterCardPet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  margin-top:15px;
`;

export const ContainerSizePet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;

  width:50%;
`
export const CardSizePet = styled.div<PetProps>`
  background: #A1D3E5;
  padding:4px;
  margin-right:5px;
  border-radius:5px;
`;

export const CardSizePetP = styled(CardSizePet)`

  ${(props)=>
    props.size ==='P' &&
      css`
        background: #73ABBF;
      `
  }
`;

export const CardSizePetM = styled(CardSizePet)`

  ${(props)=>
    props.size ==='M' &&
      css`
        background: #73ABBF;
      `
  }
`;

export const CardSizePetG = styled(CardSizePet)`

  ${(props)=>
    props.size ==='G' &&
      css`
        background: #73ABBF;
      `
  }
`;

export const TextSizePet = styled.p`
  color:#fff;
  font-size:0.8rem;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const ContainerViewPet = styled.div`
  display:flex;
  flex-direction:row;
  align-items:flex-start;
  justify-content:center;

  width:50%;
`;

export const TextViewPet = styled.p`
  color:#104B60;
  font-size:0.8rem;
  font-family:'Mulish', serif;
  font-weight:bold;
`;

export const ContainerButton = styled.button`
  display:flex;
  flex-direction:row;
  text-decoration:none;
  margin-right:5px;

  font-size:1.2rem;
  margin-right:15px;
  color:#000;
  font-family:'Mulish', serif;
  font-weight:bold;

  border:0;
  background: none;
`;
