import { createUserAPi } from '@lib/apiService'
import { createUserNotification } from '@utils/utils'
import { FormEvent, useState } from 'react'
import styles from './AuthForm.module.scss'
import Notification from '@components/ui/Notification'
import { signIn } from 'next-auth/react'

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [requestStatus, setRequestStatus] = useState<string>('')
  const [requestError, setRequestError] = useState<string>('')

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isLogin) {
      const result: any = await signIn('credentials', {
        redirect: false,
        email: email,
        password: password,
      })
      if (result?.error) {
        setRequestError(result.error)
        setRequestStatus('error')
        return
      }
      console.log(result)
    } else {
      setRequestStatus('pending')
      try {
        await createUserAPi({ email, password })

        setRequestStatus('success')
        setEmail('')
        setPassword('')
      } catch (error: any) {
        setRequestError(error.message)
        setRequestStatus('error')
      }
    }
  }

  return (
    <section className={styles.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor='email'>Your Email</label>
          <input
            type='email'
            id='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <div className={styles.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={styles.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      {!!requestStatus && (
        <Notification
          {...createUserNotification(requestStatus, requestError)}
          onClick={() => {
            setRequestStatus('')
            setRequestError('')
          }}
        />
      )}
    </section>
  )
}

export default AuthForm
