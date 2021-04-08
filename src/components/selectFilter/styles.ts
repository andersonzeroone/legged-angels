import styled from'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  padding-left:10px;
  width:100%;
  border-radius:20px;
  box-shadow: 0px 4px 4px 1px rgb(141, 140, 140);
  margin-right:20px;
`;

export const ReactSelects = styled(ReactSelect)`

  .react-select__control{
    background:#FFFFFF;
    border-radius:20px;
    /* border:1px solid #CC9E1F; */
    /* padding:8px; */
    border:0;
    width:150px;
  }

  .css-1pahdxg-control{
    color:#CC9E1F;
    border:1px solid #CC9E1F;
  }
`;

export const Icon = styled.img`
  height:30px;
  width:30px;
`;
