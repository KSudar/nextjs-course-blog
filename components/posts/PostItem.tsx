import { TPost } from '@type/types'
import styles from './PostItem.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { formatDateToDisplay } from '@utils/utils'
const PostItem = ({ post }: { post: TPost }) => {
  const { title, image, excerpt, date, slug } = post

  const formattedDate = formatDateToDisplay(date)
  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <li key={slug} className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <a>
          <div className={styles.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout='responsive'
            />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}
export default PostItem
