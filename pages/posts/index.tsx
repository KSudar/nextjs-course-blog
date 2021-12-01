import AllPosts from '@components/posts/AllPosts'
import { getAllPosts } from '@lib/postsUtil'
import { TPost } from '@type/types'
import Head from 'next/head'

const AllPostsPage = ({ allPosts }: { allPosts: TPost[] }) => {
  return (
    <>
      <Head>
        <title>All My Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={allPosts} />
    </>
  )
}

export async function getStaticProps() {
  const props = {
    allPosts: getAllPosts(),
  }
  return { props, revalidate: 60 }
}

export default AllPostsPage
