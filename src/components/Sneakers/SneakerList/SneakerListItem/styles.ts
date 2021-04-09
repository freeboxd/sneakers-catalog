import styled from 'styled-components';

export const SneakerOptionsContainer = styled.div`
  display: flex;
  column-gap: 2rem;
  justify-content: space-evenly;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ProductPrice = styled.span`
  font-size: 2.4rem;
  font-weight: 600;
  margin: 1.8rem;
`;

export const SelectContainer = styled.div`
  & label {
    display: flex;
    align-items: center;
    color: #8D8D8D;
    font-size: 1.4rem;
    font-weight: 300;
    & span {
      margin-right: 1rem;
    }
  }
`;
