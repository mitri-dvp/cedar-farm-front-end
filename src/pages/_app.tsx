import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import Layout from '@components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const SEO = {
    metaTitle: 'Cedar Farm',
    metaDescription:
      'Black Angus Breeder, Dorper Sheep Breeder,🌱 Raised with Care and Integrity.',
    shareImage: `${process.env.NEXT_PUBLIC_FRONT_END_URL}/logo-2.png`
  }
  return (
    <>
      <Head>
        {/* META DATA */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* SEO */}
        <link rel="icon" href="/favicon.ico" />
        <title>Cedar Farm</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content={SEO.metaTitle} />
        <meta name="twitter:title" content={SEO.metaTitle} />

        <meta name="description" content={SEO.metaDescription} />
        <meta property="og:description" content={SEO.metaDescription} />
        <meta name="twitter:description" content={SEO.metaDescription} />

        <meta name="image" content={SEO.shareImage} />
        <meta property="og:image" content={SEO.shareImage} />
        <meta name="twitter:image" content={SEO.shareImage} />

        <meta name="twitter:card" content="summary" />

        {/* FONTS */}
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
        <link
          href="https://fonts.googleapis.com/css2?family=League+Gothic&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
