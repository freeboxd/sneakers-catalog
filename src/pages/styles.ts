import styled from 'styled-components';
import {Card} from '../components/UI/Card';

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

export const ProductList = styled.div`
  width: 100%;
`;

export const ProductListContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  padding-top: 6.5rem;
  column-gap: 5rem;

  & ${Card} + ${Card} {
    margin-top: 6rem;
  }

  @media all and (min-width: 769px) {
    width: 94%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    row-gap: 50px;
    
    & ${Card} + ${Card} {
      margin-top: 0;
    }
  }
`;

export const NotFoundMessage = styled.h3`
  margin-top: 3rem;
  font-size: 2rem;
  text-align: center;
  color: ${props => props.theme.color.primary};
  font-weight: 600;
`;
