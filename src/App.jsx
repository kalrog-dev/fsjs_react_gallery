import { Routes, Route, Navigate } from 'react-router-dom'

import { gallery, search, navigation } from '@data'
import { useGetImages } from '@hooks'
import { Search, Navigation, Gallery } from '@widgets'

import './App.css'

const App = () => {
  const { resultsPerPage, initImages, initImageCount } = gallery
  const {
    images,
    imageCount,
    currentPage,
    totalPages,
    isLoading,
    handleSubmit,
    handlePageButtonClick,
  } = useGetImages(resultsPerPage, initImages, initImageCount)

  const galleryJSX = (
    <Gallery
      data={gallery}
      images={images}
      imageCount={imageCount}
      currentPage={currentPage}
      totalPages={totalPages}
      isLoading={isLoading}
      handlePageButtonClick={handlePageButtonClick}
    />
  )

  return (
    <div className='container'>
      <Search data={search} handleSubmit={handleSubmit} />
      <Navigation data={navigation} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/cats' />} />
        <Route path='/cats' element={galleryJSX} />
        <Route path='/dogs' element={galleryJSX} />
        <Route path='/computers' element={galleryJSX} />
        <Route path='/search/:query' element={galleryJSX} />
      </Routes>
    </div>
  )
}

export default App
