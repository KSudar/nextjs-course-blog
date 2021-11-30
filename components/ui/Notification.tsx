import { useEffect, useState } from 'react'
import styles from './Notification.module.scss'

function Notification({
  title,
  message,
  status,
  onClick,
}: {
  title: string
  message: string
  status: string
  onClick?: () => void
}) {
  let statusClasses = ''
  const [displayNotification, setDisplayNotification] = useState(false)

  useEffect(() => {
    setDisplayNotification(true)
    if (status !== 'pending') {
      const timer = setTimeout(() => {
        setDisplayNotification(false)
        onClick && onClick()
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [status, onClick])

  if (status === 'success') {
    statusClasses = styles.success
  }

  if (status === 'error') {
    statusClasses = styles.error
  }

  const cssClasses = `${styles.notification} ${statusClasses}`

  return (
    <>
      {displayNotification && (
        <div
          onClick={() => {
            setDisplayNotification(false)
            onClick && onClick()
          }}
          className={cssClasses}
        >
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      )}
    </>
  )
}

export default Notification
