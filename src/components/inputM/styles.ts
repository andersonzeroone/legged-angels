import styled from 'styled-components';

export const Container = styled.div`
  background:#EEEEF0;
  border-radius:15px;
  border:1px solid #CC9E1F;
  padding:16px;
  width:100%;

  color:#596C83;

  display:flex;
  /* align-items:center; */

  & + div{
    margin-top:18px;
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
