import React, {
  ButtonHTMLAttributes,
 } from 'react';

import Spinner from '../Spinner';

import {
  ButtonElement,
  IconContainer,
} from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string,
  isLoading?: boolean,
}

const Button: React.FC<ButtonProps> = ({
  title,
  isLoading,
  ...rest
}: ButtonProps) => {

  return (
    <ButtonElement
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