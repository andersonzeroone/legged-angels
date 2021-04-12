import React, { useCallback } from 'react';
import {FiLogIn,FiLogOut,FiUserPlus} from 'react-icons/fi';
import {useAuth} from '../../hooks/AuthContext';

import imgHome from '../../assets/home.png';
import imgAddPet from '../../assets/addPet.png';
import imgMyPet from '../../assets/myPet.png';

import {
  ContainerHeader,
  ContainerButtonNav,
  ContainerMenu,
  ButtonNav,
  Links,
  IconButtonNav,
  ButtonSignIn,
  ButtonSignUp,
  ContainerName,
  ContainerImageNameUser,
  ImageUser,
  NameUser,
  ContainerSignOut

} from './styles';

interface isUserProps{
  isUser?:boolean;
  imageUser?:string;
  nameUser?:string;
}

const Header: React.FC<isUserProps> = ({isUser,imageUser, nameUser}) => {

  const { signOut} = useAuth();

  const hanldeSignOut = useCallback(()=>{
    signOut();
  },[signOut]);

  const {user} = useAuth();

  return (
    <>
      <ContainerHeader>
        <p>LOGO</p>
        <ContainerMenu>
          <ContainerButtonNav>
            <ButtonNav>
              <Links to='/'>
                <IconButtonNav
                  src={imgHome}
                />
                Home
              </Links>
            </ButtonNav>

            <ButtonNav>
              <Links to='/addnewpet' style={{textDecoration:'none'}}>
                <IconButtonNav
                  src={imgAddPet}
                />
                Cadastrar pet
              </Links>
            </ButtonNav>

            <ButtonNav>
              <Links to='/'>
                <IconButtonNav
                  src={imgMyPet}
                />
                Meus pets
              </Links>
            </ButtonNav>

          </ContainerButtonNav>

          <p>|</p>

        {isUser? (
          <>
            <ContainerImageNameUser>
              <ImageUser src={user.photoProfile}/>
              <ContainerName>
                <NameUser>Óla, {user.name}</NameUser>
              </ContainerName>

              <ContainerSignOut
                onClick={hanldeSignOut}
              >
                Sair
                <FiLogOut style={{marginLeft:10}}/>
              </ContainerSignOut>
            </ContainerImageNameUser>
          </>
        ):(
          <>
            <ButtonSignIn to='signin'>
              Login
              <FiLogIn style={{marginLeft:5}}/>
            </ButtonSignIn>

            <ButtonSignUp to='signup'>
              Cadastra-se
              <FiUserPlus  size={20} style={{marginLeft:5}}/>
            </ButtonSignUp>
          </>
        )}
         </ContainerMenu>
       </ContainerHeader>
    </>
  )
}

export default Header;
