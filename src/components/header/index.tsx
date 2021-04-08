import React from 'react';
import {FiLogIn,FiUserPlus} from 'react-icons/fi';

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
  ButtonSignUp

} from './styles';

const Header: React.FC = () => {
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

          <ButtonSignIn to='signin'>
            Login
            <FiLogIn style={{marginLeft:5}}/>
          </ButtonSignIn>

          <ButtonSignUp to='signup'>
            Cadastra-se
            <FiUserPlus  size={20} style={{marginLeft:5}}/>
          </ButtonSignUp>
        </ContainerMenu>
      </ContainerHeader>
    </>
  )
}

export default Header;
