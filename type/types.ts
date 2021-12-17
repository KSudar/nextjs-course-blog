import { ObjectId } from 'bson'

export type TPost = {
  title: string
  date: string
  excerpt?: string
  image: string
  slug: string
  content?: string
  isFeatured: boolean
}

export type TNewMessage = {
  id?: ObjectId
  message: string
  email: string
  name: string
}
export type TUserCreate = {
  id?: ObjectId
  email: string
  password: string
}
