import Head from 'next/head';
import Header from '../components/UI/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Catalog - Trustly Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sneakers application for the Trustly Frontend Challenge"
        />
      </Head>
      <Header title={'Sneakers'} previous={true} />
      <main>
        <h1>Hello world.</h1>
      </main>
    </div>
  )
}
