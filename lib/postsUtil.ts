import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content', 'posts')

const getPostsFileNames = () => {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts')
  return fs.readdirSync(postsDirectory)
}

const getAllSlugs = () => {
  return getPostsFileNames().map((postFile) => postFile.replace(/\.md$/, ''))
}

const getPostData = (postIdentifier: string) => {
  const slug = postIdentifier.replace(/\.md$/, '')
  const filePath = path.join(postsDirectory, `${slug}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  const { title, date, excerpt, image, isFeatured } = data
  return {
    title,
    image,
    date,
    excerpt,
    slug,
    content: content,
    isFeatured,
  }
}

const getAllPosts = () => {
  const postFiles = getPostsFileNames()
  return postFiles
    .map((postFile) => getPostData(postFile))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1))
}

const getFeaturedPosts = () => {
  return getAllPosts().filter((post) => post.isFeatured)
}

export { getAllPosts, getFeaturedPosts, getAllSlugs }
