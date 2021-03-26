import { useRef , useCallback} from 'react';
import {Link} from 'react-router-dom';
import { FormHandles } from '@unform/core';
import {FiLogIn, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi';
import {Form} from '@unform/web';
import *  as Yup from 'yup';
import{ useAuth} from '../../hooks/AuthContext';

import Button from '../../components/button';
import Input from '../../components/input';

import logoImg from '../../assets/logo1.png';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  Content,Background,
  Header,
  AnimationContainer,
  ButtonBack,
  ForgotPassword
} from './styles';

interface SignInprops{
  email:string
  password:string
}

function Signin(){
  const formRef = useRef<FormHandles>(null);
  const {signIn}= useAuth();

  const handleSubmit = useCallback(async(data:SignInprops)=>{
    try{

      formRef.current?.setErrors({});

      const schema= Yup.object().shape({
        email:Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),

        password:Yup.string()
          .required('Senha obrigatória'),
      });

      await schema.validate(data,{
        abortEarly:false,
      });

      signIn({
        email:data.email,
        password:data.password
      });

    }catch(err){
      console.log(err);
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  },[])

  return(
    <Container>
      <Content>
        <Header>
          <ButtonBack to='/'>
            <FiArrowLeft style={{marginRight:5}}/>
            Voltar
          </ButtonBack>
        </Header>
        <AnimationContainer>

          <img src={logoImg} alt='Anjos de patas'/>

          <Form ref={formRef} onSubmit={handleSubmit}>
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

            <ForgotPassword to='/'>
              Esqueci minha senha.
            </ForgotPassword>
          </Form>

          <Link to='/signup'>
            <FiLogIn/>
            Criar conta!
          </Link>
        </AnimationContainer>
      </Content>
      <Background></Background>
    </Container>
  )
}

export default Signin;
