import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchJSON } from '@utils'

import apiKey from '../config'

const useGetImages = (query, resultsPerPage, initImages, initImageCount) => {
  const [images, setImages] = useState(initImages)
  const [imageCount, setImageCount] = useState(initImageCount)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const totalPages = Math.ceil(imageCount / resultsPerPage)

  const handleSuccess = (data) => {
    setImages(data.photos.photo)
    setImageCount(data.photos.total)
  }

  const handleError = (error) => {
    throw new Error(error.message)
  }

  const getImages = async (query) => {
    setIsLoading(true)
    const resultsPerPage = 12
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${resultsPerPage}&page=${currentPage}&format=json&nojsoncallback=1`

    try {
      const data = await fetchJSON(apiUrl)
      handleSuccess(data)
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
    imageCount,
    currentPage,
    totalPages,
    isLoading,
    handleSubmit,
  }
}

export default useGetImages
