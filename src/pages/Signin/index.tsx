import { Container,Content,Background } from './styles';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi';

import Button from '../../components/button';
import Input from '../../components/input';

import logoImg from '../../assets/logo1.png';

function Signin(){
  return(
    <Container>
      <Content>
        <img src={logoImg} alt='Anjos de patas'/>

        <form action="">
          <h1>Faça seu logon</h1>

          <Input
            name='email'
            icon={FiMail}
            type="text"
             placeholder='Email'
          />
          <Input
            name='password'
            icon={FiLock}
            type="password"
            placeholder='Senha'
          />

          <Button type='submit' >Entrar</Button>

          <a href="forgot">Esqueci minha senha.</a>
        </form>

          <a href="">
            <FiLogIn/>
            Criar conta!
          </a>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default Signin;
