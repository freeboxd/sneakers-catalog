import styled from 'styled-components';

export const HeaderTitle = styled.h2`
  font-weight: 400;
  font-size: 26px;
  font-family: Arial;
`;

export const HeaderElement = styled.header`
  background: ${props => props.theme.color.secondary};
  height: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media all and (max-width: 769px) {
    background-color: transparent;
    ${HeaderTitle} {
      display: none;
    }
  }
`;

export const BackButton = styled.button`
  background: rgba(0, 0, 0, 0.05);
  border-radius: 17.4025px;
  padding: 2.5px 19px 2.5px 7px;
  border: none;
  transition: 200ms ease-out;
  cursor: pointer;
  font-size: 1.9rem;
  display: flex;
  align-items: center;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  & svg {
    height: 3.1rem;
  }
`;
