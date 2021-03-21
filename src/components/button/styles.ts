import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background:#FFD04D;
  height:56px;
  border-radius:10px;
  border:0;
  padding: 0 10px;
  width:100%;
  color:#FFF;
  font-weight:bold;
  margin:18px 0;
  transition: background-color 0.2s;

  &:hover{
    background:${shade(0.2,'#FFD04D')};
  }
`;
