const formatDateToDisplay = (date: string) => {
  return new Date(date).toLocaleDateString('hr-HR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export { formatDateToDisplay }
