import { Routes, Route, Navigate } from 'react-router-dom'

import { NotFound } from '@components'
import { gallery, search, navigation } from '@data'
import { useGetImages } from '@hooks'
import { Search, Navigation, Gallery } from '@widgets'

import './App.css'

const App = ({ data }) => {
  if (!data) return null

  const { routes, resultsPerPage, initImages } = data

  const {
    images,
    imageCount,
    currentPage,
    totalPages,
    isLoading,
    handleSubmit,
    handlePageButtonClick,
    handleCaretButtonClick,
    getStaticRouteImages,
  } = useGetImages(resultsPerPage, initImages)

  const galleryJSX = (defaultQuery = null) => {
    return (
      <Gallery
        data={gallery}
        defaultQuery={defaultQuery}
        images={images}
        imageCount={imageCount}
        currentPage={currentPage}
        totalPages={totalPages}
        isLoading={isLoading}
        handlePageButtonClick={handlePageButtonClick}
        handleCaretButtonClick={handleCaretButtonClick}
        getStaticRouteImages={getStaticRouteImages}
      />
    )
  }

  return (
    <div className='container'>
      <Search data={search} handleSubmit={handleSubmit} />
      <Navigation data={navigation} routes={routes} />
      <Routes>
        <Route path='/' element={<Navigate replace to={routes[0].url} />} />
        {!!routes?.length &&
          routes.map((route) => {
            const { id, url, title } = route

            return <Route key={id} path={url} element={galleryJSX(title)} />
          })}
        <Route path='/search/:query' element={galleryJSX()} />
        <Route
          path='/404'
          element={
            <NotFound
              title={gallery.notFound.title}
              description={gallery.notFound.description}
            />
          }
        />
        <Route path='*' element={<Navigate replace to='/404' />} />
      </Routes>
    </div>
  )
}

export default App
