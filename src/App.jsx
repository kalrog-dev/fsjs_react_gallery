import { Routes, Route, Navigate, useParams } from 'react-router-dom'

import { gallery, search, navigation } from '@data'
import { useGetImages } from '@hooks'
import { Search, Navigation, Gallery } from '@widgets'

import './App.css'

const App = () => {
  const { query } = useParams()
  const { resultsPerPage, initImages, initImageCount } = gallery
  const {
    images,
    imageCount,
    currentPage,
    totalPages,
    isLoading,
    handleSubmit,
  } = useGetImages(query, resultsPerPage, initImages, initImageCount)

  return (
    <div className='container'>
      <Search data={search} handleSubmit={handleSubmit} />
      <Navigation data={navigation} />
      <Routes>
        <Route path='/' element={<Navigate replace to='/cats' />} />
        <Route path='/cats' element={<p>cats</p>} />
        <Route path='/dogs' element={<p>dogs</p>} />
        <Route path='/computers' element={<p>computers</p>} />
        <Route
          path='/search/:query'
          element={
            <Gallery
              data={gallery}
              images={images}
              imageCount={imageCount}
              currentPage={currentPage}
              totalPages={totalPages}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
