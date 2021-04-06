import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-bottom: 1px solid #bdbdbd;
  width: 100%;
  color: #666360;
  display: flex;
  padding: 3px 24px 0;
  align-items: center;

  & svg {
    width: 22px;
    height: 22px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: ${props.theme.color.primary};
      border-color: ${props.theme.color.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.color.primary};
    `}
`;

export const InputElement = styled.input`
  font-weight: 300;
  font-size: 2.2rem;
  padding: 13px;
  flex: 1;
  background: transparent;
  border: 0;
  color: ${props => props.theme.color.primaryText};
  text-align: center;

  &::placeholder {
    text-align: center;
    color: #666360;
  }
`;
