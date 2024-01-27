import { useEffect, useState } from 'react'
import { fetchJSON } from '@utils'

import apiKey from '../config'

const useGetImages = (apiUrl) => {
  const [isLoading, setIsLoading] = useState(false)
  const [images, setImages] = useState([])

  const handleSuccess = (results) => {
    setImages(results)
  }

  const handleError = (error) => {
    throw new Error(error.message)
  }

  const getImages = async () => {
    setIsLoading(true)

    try {
      const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=sunsets&per_page=24&format=json&nojsoncallback=1`
      const data = await fetchJSON(apiUrl)
      const results = data.photos.photo
      handleSuccess(results)
    } catch (error) {
      handleError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getImages()
  }, [])

  return {
    images,
    isLoading,
  }
}

export default useGetImages
