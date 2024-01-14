const Image = (props) => {
  if (!props) {
    return null
  }

  const { src, alt } = props

  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  )
}

export default Image
