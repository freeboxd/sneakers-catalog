import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  padding-bottom: 6rem;
  max-width: 1100px;

  @media all and (min-width: 769px) {
    margin-top: 4rem;
  }
`;

export const NotFoundMessage = styled.h3`
  margin-top: 3rem;
  font-size: 2rem;
  text-align: center;
  color: ${(props) => props.theme.color.primary};
  font-weight: 600;
`;
