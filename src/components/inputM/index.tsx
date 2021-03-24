import {InputHTMLAttributes, useRef, useEffect} from 'react';
import {IconBaseProps} from 'react-icons';
import { useField } from '@unform/core';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';

import { Container } from './styles';

interface Props extends InputProps {
  name: string;
  icon?:React.ComponentType<IconBaseProps>;

}

function InputMasks({name,icon:Icon,...rest}:Props){
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

  return(
    <Container>
      {Icon && <Icon size={20} style={{marginTop:-2}}/>}
      <ReactInputMask  ref={inputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  )
}

export default InputMasks;
