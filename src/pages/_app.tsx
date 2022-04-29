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
        <title>Social Menez</title>
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
