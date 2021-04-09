import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import Input from '../components/UI/Input';
import { Search } from '@styled-icons/bootstrap/Search';
import SneakerListItem from '../components/SneakerListItem';
import axios from 'axios';

import { ISneaker } from '../@types/cart/Cart';

import {
  MainContainer,
  ProductList,
  ProductListContainer,
  NotFoundMessage,
} from './styles';

export default function Home() {
  const [sneakersOriginalList, setSneakersOriginalList] = useState<ISneaker[]>([]);
  const [sneakersList, setSneakersList] = useState<ISneaker[]>([]);
  const [searchValue, setSearchValue] = useState<String>('');

  const getSneakers = async () => {
    const result = await axios
      .get('/sneakers.json')
      .then(res => res)
      .catch(err => {
        console.log(err.response);
        return err.response;
      });
    return result;
  };

  // Fetches the sneakers list and populates the components' arrays
  // if successful
  useEffect(() => {
    (async () => {
      const res = await getSneakers();
      if (res && res.status === 200) {
        setSneakersOriginalList(res.data.results);
        setSneakersList(res.data.results);
      }
    })();
  }, []);

  // Deals with the search bar filtering
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      const filteredSneakers = sneakersOriginalList.filter(sneaker =>
        sneaker.description
          .toLowerCase()
          .includes(value.length > 0 ? value.toLocaleLowerCase() : ''),
      );
      setSneakersList(filteredSneakers);
    }, [sneakersList, sneakersOriginalList],
  );

  return (
    <>
      <Head>
        <title>Catalog - Trustly Frontend Challenge</title>
      </Head>

      <main>
        <MainContainer>

          <Input
            name="Search"
            icon={Search}
            placeholder="Search for your sneaker"
            onChange={e => handleSearchChange(e.target.value)}
          />

          <ProductList>

              {sneakersList.length > 0 ? (
                <ProductListContainer>

                  {sneakersList.map((sneaker: ISneaker) => (
                  
                    <SneakerListItem
                      sneaker={sneaker}
                      key={sneaker.id}
                    />
                  
                  ))}

                </ProductListContainer>
                ) : (
                  <NotFoundMessage>
                    There are no sneakers that match {searchValue}.
                  </NotFoundMessage>
                )
              }

          </ProductList>

        </MainContainer>
      </main>
    </>
  )
}
