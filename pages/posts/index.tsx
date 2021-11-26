import type { NextPage } from 'next'
import AllPosts from '@components/posts/AllPosts'
import { getAllPosts } from '@lib/postsUtil'
import { TPost } from '@type/types'

const AllPostsPage = ({ allPosts }: { allPosts: TPost[] }) => {
  return <AllPosts posts={allPosts} />
}

export async function getStaticProps() {
  const props = {
    allPosts: getAllPosts(),
  }
  return { props, revalidate: 60 }
}

export default AllPostsPage
