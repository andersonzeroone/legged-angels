import {InputHTMLAttributes} from 'react';
import {IconBaseProps} from 'react-icons';
import InputMask from "react-input-mask"

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name:string;
  icon:React.ComponentType<IconBaseProps>;
  masks:string;
}

function InputMasks({icon:Icon,masks,...rest}:InputProps){
  return(
    <Container>
      {Icon && <Icon size={20} style={{marginTop:-2}}/>}
      <InputMask {...rest} mask={masks}/>
    </Container>
  )
}

export default InputMasks;
