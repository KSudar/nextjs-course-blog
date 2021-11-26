import styles from './PostHeader.module.scss'
import Image from 'next/image'
const PostHeader = ({
  title,
  imagePath,
}: {
  title: string
  imagePath: string
}) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={200} />
    </header>
  )
}

export default PostHeader
