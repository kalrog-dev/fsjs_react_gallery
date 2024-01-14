const NotFound = ({ data }) => {
  const { title, description } = data

  return (
    <div className='not-found'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default NotFound
