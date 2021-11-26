import styles from './PostContent.module.scss'
import PostHeader from '@components/posts/postDetail/PostHeader'
import { TPost } from '@type/types'
import ReactMarkdown from 'react-markdown'

const PostContent = ({ post }: { post: TPost }) => {
  const { title, image, content, slug } = post
  const imagePath = `/images/posts/${slug}/${image}`
  return (
    <article className={styles.content}>
      <PostHeader title={title} imagePath={imagePath} />
      <ReactMarkdown>{content || ''}</ReactMarkdown>
    </article>
  )
}

export default PostContent
