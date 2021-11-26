import PostContent from '@components/posts/postDetail/PostContent'
import { getAllPosts } from '@lib/postsUtil'
import type { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import { IParams } from './../../interfaces/interfaces'
import { TPost } from '@type/types'

const SinglePostPage = ({ post }: { post: TPost }) => {
  return <PostContent post={post} />
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const [slug] = params
  const props = {
    post: getAllPosts().find((post) => post.slug === slug),
  }
  return { props }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPosts()
//     .map((post) => post.slug)
//     .map((slug) => ({ params: { slug } }))
//   console.log('paths ', paths)
//   return {
//     paths,
//     fallback: 'blocking', // See the "fallback" section below
//   }
// }

export default SinglePostPage
