import styled from'styled-components';
import ReactSelect from 'react-select';

export const Container = styled.div`
  width:90%;
`;

export const ReactSelects = styled(ReactSelect)`

  .react-select__control{
    background:#EEEEF0;
    border-radius:15px;
    /* border:1px solid #CC9E1F; */
    padding:8px;
    margin-right:5px;
  }

  .css-1pahdxg-control{
    color:#CC9E1F;
    border:1px solid #CC9E1F;
  }
`;
