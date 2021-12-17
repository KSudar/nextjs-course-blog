import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '@lib/db'
import { hashPassword } from '@lib/auth.'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  if (
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({ message: 'Invalid input' })
    return
  }

  let client

  try {
    client = await connectToDatabase()
  } catch (error: any) {
    res.status(500).json({ message: 'Could not connect to database' })
    return
  }

  const db = client.db()

  const existingUser = await db.collection('users').findOne({ email })

  if (existingUser) {
    res.status(422).json({ message: 'User already exists' })
    client.close()
    return
  }

  const hashedPassword = await hashPassword(password)

  try {
    const response = await db
      .collection('users')
      .insertOne({ email, password: hashedPassword })

    res
      .status(201)
      .json({ message: 'User is created!', userId: response.insertedId })
    client.close()
  } catch (error) {
    client.close()
    res.status(500).json({ message: 'User creation failed' })
    return
  }
}

export default handler
