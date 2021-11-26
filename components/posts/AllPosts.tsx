import styles from './AllPosts.module.scss'
import PostGrid from '@components/posts/PostGrid'
import { TPost } from '@type/types'
const AllPosts = ({ posts }: { posts: TPost[] }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  )
}

export default AllPosts
