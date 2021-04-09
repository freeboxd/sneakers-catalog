import React from 'react';
import SneakerListItem from './SneakerListItem';

import { ISneaker } from '../../../@types/cart/Cart';

import {
  ProductList,
  ProductListContainer,
} from './styles';

type SneakerListProps = {
  sneakerList: ISneaker[],
  children: React.ReactNode,
}

const SneakerList: React.FC<SneakerListProps> = ({
  sneakerList,
  children,
}: SneakerListProps) => {
  return (
    <ProductList>

      {sneakerList.length > 0 ? (
        <ProductListContainer>

          {sneakerList.map((sneaker: ISneaker) => (
          
            <SneakerListItem
              sneaker={sneaker}
              key={sneaker.id}
            />
          
          ))}

        </ProductListContainer>
        ) : children
      }

    </ProductList>
  )
};

export default SneakerList;
