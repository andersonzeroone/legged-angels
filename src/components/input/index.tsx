import {InputHTMLAttributes, useEffect, useRef} from 'react';
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  icon:React.ComponentType<IconBaseProps>;
}

function Input({name,icon:Icon,...rest}:InputProps){
  const inputRef = useRef(null);
  const{fieldName,defaultValue,error,registerField} = useField(name);

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref:inputRef.current,
      path:'value'
    })
  },[fieldName, registerField]);

  return(
    <Container>
      {Icon && <Icon size={20} style={{marginTop:-2}}/>}
      <input defaultValue={defaultValue} ref={inputRef} {...rest} type="text"/>
    </Container>
  )
}

export default Input;
