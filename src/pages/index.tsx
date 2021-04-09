import React, { useEffect, useCallback, useState } from 'react';
import Head from 'next/head';
import { InferGetStaticPropsType } from 'next';
import { ISneaker } from '../@types/cart';
import Sneakers from '../components/Sneakers';
import Header from '../components/UI/Header';

export const getStaticProps = async () => {
  const res = await fetch(process.env.SNEAKERS_API_URL)
  const sneakerList: ISneaker[] = (await res.json()).results;

  return {
    props: {
      sneakerList,
    },
  }
}

export default function Home({ sneakerList }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState<string>('');

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

      <Header
        title="Sneakers"
        previous={false}
      />

      <main>
        <Sneakers
          sneakerList={sneakerListClone}
          searchValue={searchValue}
          onChangeSearchValue={(searchValue) => handleSearchChange(searchValue)}
        />
      </main>
    </>
  )
}
