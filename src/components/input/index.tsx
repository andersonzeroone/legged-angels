import {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  icon:React.ComponentType<IconBaseProps>;
}

function Input({icon:Icon,...rest}:InputProps){
  return(
    <Container>
      {Icon && <Icon size={20} style={{marginTop:-2}}/>}
      <input {...rest} type="text"/>
    </Container>
  )
}

export default Input;
