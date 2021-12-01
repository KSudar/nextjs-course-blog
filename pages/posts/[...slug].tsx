import PostContent from '@components/posts/postDetail/PostContent'
import { getAllPosts, getAllSlugs } from '@lib/postsUtil'
import type { GetStaticPaths, GetStaticProps } from 'next'
import { TPost } from '@type/types'
import Head from 'next/head'

const SinglePostPage = ({ post }: { post: TPost }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
        <meta
          property='og:image'
          itemProp='image'
          content={`/images/posts/${post.slug}/${post.image}`}
        />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [slug] =
    params?.slug instanceof Array ? params?.slug || '' : [params?.slug] || ['']

  const props = {
    post: getAllPosts().find((post) => post.slug === slug),
    revalidate: 60,
  }
  return { props }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllSlugs().map((slug) => ({ params: { slug: [slug] } }))

  return {
    paths,
    fallback: false, // See the "fallback" section below
  }
}

export default SinglePostPage
