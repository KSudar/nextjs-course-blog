import FeaturedPosts from '@components/homePage/FeaturedPosts'
import Hero from '@components/homePage/Hero'
import { TPost } from '@type/types'
import { getFeaturedPosts } from '@lib/postsUtil'
import Head from 'next/head'

const HomePage = ({ posts }: { posts: TPost[] }) => {
  return (
    <>
      <Head>
        <title>{`Krešimir's Blog`}</title>
        <meta name='description' content='I post about web development' />
        <meta property='og:image' content='/images/site/profile-image.png' />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}
export default HomePage

export async function getStaticProps() {
  const props = {
    posts: getFeaturedPosts(),
  }
  return { props, revalidate: 600 }
}

// 1) Hero => Present ourselves
// 2) Featured Posts
