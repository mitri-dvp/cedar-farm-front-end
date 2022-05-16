import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Layout from '@components/Layout'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const routes = ['/_error']

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Cedar Farm</title>
        <meta
          name="description"
          content="Black Angus Breeder, Dorper Sheep Breeder,🌱 Raised with Care and Integrity."
        />
      </Head>
      {routes.includes(pathname) ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  )
}

export default MyApp
