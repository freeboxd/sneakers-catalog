import React, {
  ButtonHTMLAttributes,
 } from 'react';

import Spinner from '../Spinner';

import {
  ButtonElement,
  IconContainer,
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isLoading?: boolean,
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <ButtonElement
      readonly={disabled}
      {...rest}
    >
      <IconContainer>
        {isLoading && <Spinner/>}
      </IconContainer>
      {title}
    </ButtonElement>
  );
};

export default Button;