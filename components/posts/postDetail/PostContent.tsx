import styles from './PostContent.module.scss'
import PostHeader from '@components/posts/postDetail/PostHeader'
import { TPost } from '@type/types'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const PostContent = ({ post }: { post: TPost }) => {
  const { title, image, content, slug } = post
  const imagePath = `/images/posts/${slug}/${image}`
  const customRenderers = {
    // img(image: ImgHTMLAttributes<HTMLImageElement>) {
    //   return (
    //     <span className={styles.image}>
    //       <Image
    //         src={`/images/posts/${post.slug}/${image.src}`}
    //         alt={image.alt}
    //         width={600}
    //         height={300}
    //       />
    //     </span>
    //   )
    // },
    p({ node, children }: { node: any; children: ReactNode }) {
      if (node?.children && node.children[0].tagName === 'img') {
        const image = node.children[0]
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{children}</p>
    },
    code({ className, children }: any) {
      // const { className, children } = code
      const language = className?.split('-')[1] || 'js' // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter style={atomDark} language={language}>
          {children}
        </SyntaxHighlighter>
      )
    },
  }
  return (
    <article className={styles.content}>
      <PostHeader title={title} imagePath={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {content || ''}
      </ReactMarkdown>
    </article>
  )
}

export default PostContent
