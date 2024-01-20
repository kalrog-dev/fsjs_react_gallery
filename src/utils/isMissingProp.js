const isMissingProp = (...requiredProps) => {
  const list = requiredProps.map((element) => element ?? null)
  return list.some((prop) => prop === null)
}

export default isMissingProp