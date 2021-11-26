import styles from './FeaturedPosts.module.scss'
import PostGrid from '@components/posts/PostGrid'
import { TPost } from '@type/types'
const FeaturedPosts = ({ posts }: { posts: TPost[] }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
