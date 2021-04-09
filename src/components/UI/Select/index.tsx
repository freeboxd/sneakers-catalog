import React, { SelectHTMLAttributes, useRef } from 'react';
import { Container, SelectElement } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: any;
}

const Select: React.FC<SelectProps> = ({
  disabled,
  options,
  ...rest
}: SelectProps) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  return (
    <Container>
      <SelectElement ref={inputRef} {...rest}>
        {options}
        {' '}
      </SelectElement>
    </Container>
  );
};

export default Select;
