import '@styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@components/layout/Layout'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, inital-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
