import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

const getPostData = (fileName: string) => {
  const filePath = path.join(postsDirectory, fileName)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const { title, date, excerpt, image, isFeatured } = data
  return {
    title,
    image,
    date,
    excerpt,
    slug: fileName.replace(/\.md$/, ''),
    content: content,
    isFeatured,
  }
}

const getAllPosts = () => {
  const postsDirectorty = path.join(process.cwd(), 'content', 'posts')
  const postFiles = fs.readdirSync(postsDirectorty)
  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
}

const getFeaturedPosts = () => {
  return getAllPosts().filter((post) => post.isFeatured)
}

export { getAllPosts, getFeaturedPosts }
