import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'
import { TNewMessage } from '@type/types'
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

    const newMessage: TNewMessage = { email, name, message }
    let client
    try {
      client = await MongoClient.connect(process.env.API_KEY || '')
    } catch (error: any) {
      res.status(500).json({ message: 'Could not connect to database' })
      return
    }

    const db = client.db()

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
