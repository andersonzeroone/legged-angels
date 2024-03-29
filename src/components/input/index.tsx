import {InputHTMLAttributes, useEffect, useRef, useState, useCallback} from 'react';
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';


import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  icon:React.ComponentType<IconBaseProps>;
  typeMask?:string;
}

function Input({name,icon:Icon,typeMask,...rest}:InputProps){

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const{fieldName,defaultValue,error,registerField} = useField(name);

  useEffect(()=>{
    registerField({
      name:fieldName,
      ref:inputRef.current,
      path:'value'
    })
  },[fieldName, registerField]);

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true);
  },[])

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);
    setIsField(!!inputRef.current?.value);

  },[])

  return(
    <>
    {error}
    <Container isErrored={!!error} isField={isField} isFocused={isFocused} typeMask={typeMask}>
      {Icon && <Icon size={20} style={{marginTop:-2}}/>}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
        type="text"
      />

      {/* {error && (
        <Error title={error}>
          <FiAlertCircle color='#c53030' size={20}/>
        </Error>
      )} */}
    </Container>
    </>
  )
}

export default Input;
