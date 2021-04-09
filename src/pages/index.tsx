import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import Input from '../components/UI/Input';
import { Search } from '@styled-icons/bootstrap/Search';
import SneakerList from '../components/SneakerList';
import { InferGetStaticPropsType } from 'next';
import { ISneaker } from '../@types/cart/Cart';

import {
  MainContainer,
  NotFoundMessage,
} from './styles';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/sneakers')
  const sneakerList: ISneaker[] = (await res.json()).results;

  return {
    props: {
      sneakerList,
    },
  }
}

export default function Home({ sneakerList }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<String>('');

  const [sneakerListClone, setSneakerListClone] = useState<ISneaker[]>([]);

  useEffect(() => {
    setSneakerListClone(sneakerList);
  }, [sneakerList]);

  // Deals with the search bar filtering
  const handleSearchChange = useCallback(
    (value: string) => {
      setSearchValue(value);
      const filteredSneakers = sneakerList.filter(sneaker =>
        sneaker.description
          .toLowerCase()
          .includes(value.length > 0 ? value.toLocaleLowerCase() : ''),
      );
      setSneakerListClone(filteredSneakers);
    }, [sneakerList, sneakerListClone],
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
            onChange={e => setSearchValue(e.target.value)}
          />

          <SneakerList
            sneakerList={sneakerListClone}
          >
            <NotFoundMessage>
              {
                searchValue !== '' ? <>There are no sneakers that match {searchValue}.</>
                : <>There are no sneakers to show.</>
              }
            </NotFoundMessage>
          </SneakerList>

        </MainContainer>
      </main>
    </>
  )
}
