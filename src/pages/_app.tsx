import GlobalStyle from './../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
