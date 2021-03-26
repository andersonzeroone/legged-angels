import { InputHTMLAttributes,useRef, useEffect, useCallback, useState} from 'react';
import {IconBaseProps} from 'react-icons';
import { useField } from '@unform/core';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { Container,Error } from './styles';
import { FiAlertCircle } from 'react-icons/fi';
interface Props extends InputProps {
  name: string;
  icon?:React.ComponentType<IconBaseProps>;
  typeMaks?:string;
}

type RefProps = InputHTMLAttributes<HTMLInputElement>

function InputMasks({name,icon:Icon,typeMaks,...rest}:Props){

  const [isFocused, setIsFocused] = useState(false);
  const [isField, setIsField] = useState(false);

  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        ref.setInputValue(value);
      },
      clearValue(ref: any) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(()=>{
    setIsFocused(true);
  },[])

  const handleInputBlur = useCallback(()=>{
    setIsFocused(false);
    setIsField(!!inputRef.current);
    // console.log(inputRef)

  },[])

  return(
    <Container isErrored={!!error} isField={isField} isFocused={isFocused} typeMaks={typeMaks}>
      {Icon && <Icon size={20} />}
      <ReactInputMask
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && (
        <Error>
          <FiAlertCircle color='#c53030' size={20}/>
        </Error>
      )}
    </Container>
  )
}

export default InputMasks;
