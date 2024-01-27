const fetchJSON = async (apiUrl) => {
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) throw new Error("Something went wrong.")
    return await response.json()
  } catch (error) {
    throw new Error(error.message)
  }
}

export default fetchJSON