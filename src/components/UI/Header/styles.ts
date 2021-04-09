import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 400;
  font-size: 2.2rem;
  font-family: Arial;
`;

export const HeaderElement = styled.header`
  background: ${(props) => props.theme.color.secondary};
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 769px) {
    background-color: transparent;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  
  position: relative;

  @media all and (max-width: 769px) {
    ${Title} {
      display: none;
    }
  }
`;

export const BackButtonContainer = styled.div`
height: auto;
`;

export const BackButton = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
  padding: .2rem 1.9rem .2rem 1rem;
  border: none;
  transition: 200ms ease-out;
  cursor: pointer;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  outline: 0;
  position: absolute;
  top: 0;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  & svg {
    height: 3.1rem;
  }
`;
