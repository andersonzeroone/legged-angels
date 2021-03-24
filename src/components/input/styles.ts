import styled , {css} from 'styled-components';
interface ContainerProps{
  isFocused:boolean;
  isField:boolean;
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
  }

  svg{
    margin-right:5px;
  }
`;
