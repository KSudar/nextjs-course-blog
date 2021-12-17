import { FormEvent, useState } from 'react'
import styles from './ContactForm.module.scss'
import Notification from '@components/ui/Notification'
import { sendMessageApi } from '@lib/apiService'
import { sendMessageNotification } from '@utils/utils'

const ContactForm = () => {
  const [email, setEmail] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [requestStatus, setRequestStatus] = useState<string>('')
  const [requestError, setRequestError] = useState<string>('')

  async function sendMessageHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setRequestStatus('pending')
    try {
      await sendMessageApi({ email, name, message })

      setRequestStatus('success')
      setMessage('')
      setEmail('')
      setName('')
    } catch (error: any) {
      setRequestError(error.message)
      setRequestStatus('error')
    }
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              name='name'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            rows={5}
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {!!requestStatus && (
        <Notification
          {...sendMessageNotification(requestStatus, requestError)}
          onClick={() => {
            setRequestStatus('')
            setRequestError('')
          }}
        />
      )}
    </section>
  )
}

export default ContactForm
