import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import theme from '../styles/theme';

// Context
import { CartProvider } from '../providers/CartProvider';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Sneakers application for the Trustly Frontend Challenge"
          />
        </Head>
        <GlobalStyle />
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
