import { TNewMessage, TUserCreate } from '@type/types'

const sendMessageApi = async (args: TNewMessage) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ ...args }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.')
  }
}

const createUserAPi = async (args: TUserCreate) => {
  const response = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({ ...args }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.')
  }
}

export { sendMessageApi, createUserAPi }
