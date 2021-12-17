import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient } from 'mongodb'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(201)
}

export default handler
