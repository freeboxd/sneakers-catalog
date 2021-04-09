import styled from 'styled-components';

type SelectProps = {
  error?: boolean,
  disabled?: boolean,
};

export const Container = styled.div`
  display: flex;
  border: 0.900966px solid #e8e8e8;
  border-radius: 25px;
`;

export const SelectElement = styled.select<SelectProps>`
  background: transparent;
  border: transparent;
  width: 6rem;
  height: 2.9rem;
  font-size: 1.6rem;
  font-weight: 300;
  padding-left: 1rem;
  margin-right: 1rem;
  color: #808080;
`;
