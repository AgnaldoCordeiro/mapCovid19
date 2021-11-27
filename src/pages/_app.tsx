import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import React from 'react'
import GlobalStyle from '@styles/global-style'
import { AppContainer } from 'ui/styles/pages/_app.style'
import theme from 'ui/themes/theme'
import Footer from 'ui/components/surfaces/Footer/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {  
  return <>
     <Head>
      <title>Mapa Covid-19</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      {/* eslint-disable @next/next/no-page-custom-font*/}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      {/* eslint-disable @next/next/no-css-tags*/}
     
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppContainer>
        <Component {...pageProps} />
    <Footer/>    
      </AppContainer>
    </ThemeProvider>
    </>
}
export default MyApp
