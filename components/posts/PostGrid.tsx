import { TPost } from '@type/types'
import styles from './PostGrid.module.scss'
import PostItem from './PostItem'
const PostGrid = ({ posts }: { posts: TPost[] }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post: TPost) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  )
}

export default PostGrid
