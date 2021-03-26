import styled , {css} from 'styled-components';
import Tooltip from '../Tooltip';
interface ContainerProps{
  isFocused:boolean;
  isField:boolean;
  isErrored:boolean;
  typeMask?:string;
}

export const Container = styled.div<ContainerProps>`
  background:#EEEEF0;
  border-radius:15px;
  padding:16px;
  width:100%;
  /* border:2px solid #FFD04D; */
  color:#596C83;

  display:flex;
  /* align-items:center; */

  & + div{
    margin-top:18px;
  }

  ${(props)=>
    props.isFocused &&
      css`
        border:2px solid #FFD04D;
        color:#FFD04D;
      `
  }

  ${(props)=>
      props.typeMask === 'addressNumber' &&
        css`
          width:75%;
        `
    }

  ${(props)=>
      props.isErrored &&
        css`
          border:2px solid #c53030;
        `
    }
  ${(props)=>
      props.isField &&
        css`
          color:#FFD04D;
        `
    }

  input{
    flex:1;
    padding:1px;
    background:transparent;
    border:0;

    color:#596C83;

    &::placeholder{
      color:#596C83;
    }

    ${(props)=>
      props.typeMask === 'addressNumber' &&
        css`
          width:70%;
        `
    }
  }

  svg{
    margin-right:5px;
  }
`;

export const Error = styled(Tooltip)`
  height:20px;
  margin-left:16px;

  svg{
    margin:0;
  }

  span{
    background:#c53030;
    color:#fff;

    &::before{
      border-color:#c53030 transparent;
    }
  }
`;
