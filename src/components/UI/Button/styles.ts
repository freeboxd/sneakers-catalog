import styled from 'styled-components';

export const ButtonElement = styled.button`
  border: 0;
  cursor: pointer;
  background-color: #6B8067;
  border-radius: 4.50483px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1.2rem 0;
  font-weight: 700;
  color: #fff;
  font-size: 1.6rem;
  position: relative;
  transition: background-color 200ms ease-out;
  outline: 0;

  &:hover {
    background-color: #576954;
  }

  &:active {
    background-color: #7c9277;
  }
`;

export const IconContainer = styled.span`
  position: absolute;
  display: flex;
  left: 2rem;
`;