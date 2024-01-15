const Heading = (props) => {
  if (!props || !Object.keys(props).length > 0) {
    return null
  }

  const { as: As, variant, children } = props

  if (!As || !variant || !children) {
    return null
  }

  return <As className={variant}>{children}</As>
}

export default Heading
