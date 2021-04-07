import React, { SelectHTMLAttributes, useRef } from 'react';
import {
  Container,
  SelectElement,
} from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  options: any;
  label?: string;
  disabled?: boolean;
}

const Select: React.FC<SelectProps> = ({
  error,
  label,
  disabled,
  options,
  ...rest
}: SelectProps) => {
  const inputRef = useRef<HTMLSelectElement>(null);

  return (
    <Container error={!!error} disabled={disabled}>
      <SelectElement ref={inputRef} {...rest}>
        {options}{' '}
      </SelectElement>
    </Container>
  );
};

export default Select;
