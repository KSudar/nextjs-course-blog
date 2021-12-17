import { MongoClient } from 'mongodb'

const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.grjfn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

const connectToDatabase = async () => {
  const client = await MongoClient.connect(connectionString)
  return client
}

export { connectToDatabase }
