import styled from 'styled-components';

interface ImgProps {
  src: string,
}

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  padding-bottom: 6rem;
  max-width: 1100px;

  @media all and (min-width: 769px) {
    margin-top: 4rem;
  }
`;

export const PageTitle = styled.h1`
  display: block;
  font-weight: 400;
  align-self: flex-start;

  @media all and (min-width: 769px) {
    display: none;
  }
`;