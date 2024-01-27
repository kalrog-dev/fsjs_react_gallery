const fetchJSON = async (apiUrl, options) => {
  try {
    const response = await fetch(apiUrl, options)
    if (!response.ok) throw new Error("Something went wrong.")
    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

export default fetchJSON