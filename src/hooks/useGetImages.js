import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchJSON } from '@utils'

import apiKey from '../config'

const useGetImages = (query) => {
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([])
  const navigate = useNavigate()

  const handleSuccess = (results) => {
    setImages(results)
  }

  const handleError = (error) => {
    throw new Error(error.message)
  }

  const getImages = async (query) => {
    setIsLoading(true)
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`

    try {
      const data = await fetchJSON(apiUrl)
      const results = data.photos.photo
      handleSuccess(results)
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = (event, value) => {
    event.preventDefault()
    getImages(value)
    navigate(`/search/${value}`)
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading,
    handleSubmit,
  }
}

export default useGetImages
