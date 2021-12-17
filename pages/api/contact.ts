import { NextApiRequest, NextApiResponse } from 'next'
import { TNewMessage } from '@type/types'
import { connectToDatabase } from '@lib/db'
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      !name.trim() ||
      !message ||
      !message.trim()
    ) {
      res.status(422).json({ message: 'Invalid input.' })
    }

    let client

    try {
      client = await connectToDatabase()
    } catch (error: any) {
      res.status(500).json({ message: 'Could not connect to database' })
      return
    }

    const db = client.db()
    const newMessage: TNewMessage = { email, name, message }

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
      res.status(201).json({ text: 'Message sent', message: newMessage })
      client.close()
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Sending message failed ' })
      return
    }

    // Store it in a database
  } else {
    res.status(200).json({ name: 'John Doe' })
  }
}

export default handler
