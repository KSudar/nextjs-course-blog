import { verifyPassword } from '@lib/auth.'
import { connectToDatabase } from '@lib/db'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
export default NextAuth({
  secret: process.env.API_SECRET,
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials) {
        const client = await connectToDatabase()
        const usersCollection = client.db().collection('users')
        const user = await usersCollection.findOne({
          email: credentials?.email,
        })
        if (!user) {
          throw new Error(
            `User with the email of ${credentials?.email} doesn't exist`
          )
        }

        const isPasswordValid = await verifyPassword(
          credentials?.password || '',
          user.password
        )

        if (!isPasswordValid) {
          throw new Error('Invalid password')
        }
        client.close()

        return { email: user.email }
      },
    }),
  ],
})
