import React from 'react';
import { ISneaker } from '../../@types/cart';
import SneakerList from './SneakerList';
import Input from '../UI/Input';
import {Search} from '@styled-icons/bootstrap/Search'

import {
  MainContainer,
  NotFoundMessage,
} from './styles';

type SneakersProps = {
  sneakerList: ISneaker[],
  searchValue: string,
  onChangeSearchValue(searchValue: string): void,
}

const Sneakers: React.FC<SneakersProps> = ({
  sneakerList,
  searchValue,
  onChangeSearchValue,
}) => {
  return (
    <MainContainer>
      <Input
        name="Search"
        icon={Search}
        placeholder="Search for your sneaker"
        onChange={e => onChangeSearchValue(e.target.value)}
      />

      <SneakerList
        sneakerList={sneakerList}
      >
        <NotFoundMessage>
          {
            searchValue !== '' ? <>There are no sneakers that match {searchValue}.</>
            : <>There are no sneakers to show.</>
          }
        </NotFoundMessage>
      </SneakerList>

    </MainContainer>
  )
}

export default Sneakers;