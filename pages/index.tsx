import { useState, useEffect } from 'react'
import FeaturedPosts from '@components/homePage/FeaturedPosts'
import Hero from '@components/homePage/Hero'
import { TPost } from '@type/types'
import { getFeaturedPosts } from '@lib/postsUtil'

const HomePage = ({ posts }: { posts: TPost[] }) => {
  return (
    <>
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
  return { props, revalidate: 60 }
}

// 1) Hero => Present ourselves
// 2) Featured Posts
