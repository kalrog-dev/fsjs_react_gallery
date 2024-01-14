const Heading = (props) => {
  if (!props) {
    return null
  }

  const { as: As, variant, children } = props

  return <As className={variant}>{children}</As>
}

export default Heading
