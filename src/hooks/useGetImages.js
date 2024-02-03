import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchJSON } from '@utils'

import apiKey from '../config'

const useGetImages = (resultsPerPage, initImages, initImageCount) => {
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

  const getImages = async (query, page = currentPage) => {
    setIsLoading(true)
    const resultsPerPage = 12
    const apiUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=${resultsPerPage}&page=${page}&format=json&nojsoncallback=1`

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
    setCurrentPage(1)
    getImages(value)
    navigate(`/search/${value}`)
  }

  const handlePageButtonClick = (event, query) => {
    const nextPage = Number(event.currentTarget.textContent)
    setCurrentPage(nextPage)
    getImages(query, nextPage)
  }

  const handleCaretButtonClick = (type, query) => () => {
    let nextPage;

    if (type === 'next') {
      nextPage = currentPage + 1
      setCurrentPage(nextPage)
    } else {
      nextPage = currentPage - 1
      setCurrentPage(nextPage)
    }

    getImages(query, nextPage)
  }

  const getStaticRouteImages = (query) => {
    setCurrentPage(1)
    getImages(query, 1)
  }

  return {
    images,
    imageCount,
    currentPage,
    totalPages,
    isLoading,
    handleSubmit,
    handlePageButtonClick,
    handleCaretButtonClick,
    getStaticRouteImages,
  }
}

export default useGetImages
