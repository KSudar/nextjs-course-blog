import MainNavigation from '@components/layout/MainNavigation'
import { ReactNode } from 'react'
import Head from 'next/head'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <meta
          name='msapplication-TileImage'
          content={`/images/site/profile-image.png`}
        />

        <meta
          property='og:url'
          content='https://nextjs-course-blog-psi.vercel.app/'
        />

        <meta property='og:site_name' content={`Krešimir's Next blog`} />

        <meta property='og:type' content='website' />

        <meta name='description' content={'I post about web development'} />
        <meta
          property='og:description'
          content={'I post about web development'}
        />
      </Head>
      <MainNavigation />
      <main>{children}</main>
    </>
  )
}
export default Layout
