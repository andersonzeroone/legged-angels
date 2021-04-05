import React, { useRef, useEffect} from 'react';
import { useField } from '@unform/core';
import { OptionTypeBase, Props as SelectProps,} from 'react-select';

import {Container,ReactSelects} from './styles';
interface Props extends SelectProps<OptionTypeBase> {
  name: string;
}


export default function Select({ name, ...rest }: Props) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Container>
      <ReactSelects
        defaultValue={defaultValue}
        ref={selectRef}
        classNamePrefix="react-select"
        {...rest}
      />
      {error}
    </Container>

  );
};
