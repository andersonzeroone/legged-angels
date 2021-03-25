import styled , {css} from 'styled-components';
interface ContainerProps{
  isFocused:boolean;
  isField:boolean;
  isErrored:boolean;
}

export const Container = styled.div<ContainerProps>`
  background:#EEEEF0;
  border-radius:15px;
  /* border:1px solid #CC9E1F; */
  padding:16px;
  width:100%;

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
      props.isErrored &&
        css`
          border:2px solid #c53030;
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

export const Error = styled.div`
  height:20px;
  margin-left:16px;

  svg{
    margin:0;
  }
`;
