const formatDateToDisplay = (date: string) => {
  return new Date(date).toLocaleDateString('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

const sendMessageNotification = (
  requestStatus: string,
  requestError: string
) => {
  let notification
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way',
    }
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Message sent!',
      message: 'Your message is sent',
    }
  } else {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError || 'There was an error!',
    }
  }

  return notification
}

const createUserNotification = (
  requestStatus: string,
  requestError: string
) => {
  let notification
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Creating user...',
      message: 'Your message is on its way',
    }
  } else if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'User created!',
      message: 'Your account has been created',
    }
  } else {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError || 'There was an error!',
    }
  }

  return notification
}

export { formatDateToDisplay, sendMessageNotification, createUserNotification }
