import styled from 'styled-components';
import {Card} from '../UI/Card';

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
