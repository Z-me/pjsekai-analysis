import Head from 'next/head';
import CSR from '../utili/CSR'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RecoilRoot } from 'recoil';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../utili/theme'
import createEmotionCache from '../utili/createEmotionCache';


const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CSR>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>プロセカ解析ツール</title>
          <meta name="プロセカ解析ツール" content="プロセカ解析ツール" />
          <link rel="icon" href="/images/icon.png" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RecoilRoot>
            <CssBaseline />
            <Component {...pageProps} />
          </RecoilRoot>
        </ThemeProvider>
      </CacheProvider>
    </CSR>
  )
}

export default MyApp