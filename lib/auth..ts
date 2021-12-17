import { hash, compare } from 'bcryptjs'

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12)

  return hashedPassword
}

const verifyPassword = async (password: string, hashPassword: string) => {
  const isValid = await compare(password, hashPassword)
  return isValid
}

export { hashPassword, verifyPassword }
