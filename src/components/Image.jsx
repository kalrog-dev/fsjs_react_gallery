const Image = (props) => {
  if (!props || !Object.keys(props).length > 0) {
    return null
  }

  const { src, alt } = props

  if (!src || !alt) {
    return null
  }

  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  )
}

export default Image
