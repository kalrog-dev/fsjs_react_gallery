import { useParams } from 'react-router-dom'

import { Heading, Image, Loader, Pagination } from '@components'
import { useEffect } from 'react'

const Gallery = ({
  data,
  defaultQuery,
  images,
  imageCount,
  currentPage,
  totalPages,
  isLoading,
  handlePageButtonClick,
  handleCaretButtonClick,
  getStaticRouteImages,
}) => {
  if (!data) {
    return null
  }

  const { title, resultsPerPage, initImages, initImageCount } = data

  const { query } = useParams()

  useEffect(() => {
    getStaticRouteImages(defaultQuery ?? query)
  }, [defaultQuery])

  return (
    <div className='photo-container'>
      {!isLoading && !!images?.length && (
        <>
          {title && (
            <Heading as='h2' variant='title'>
              {imageCount} {title}
            </Heading>
          )}
          <ul>
            {images.map((image) => {
              const { id, secret, server, title } = image

              return (
                <Image
                  key={id}
                  src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
                  alt={title}
                />
              )
            })}
          </ul>
          <Pagination
            query={query}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageButtonClick={handlePageButtonClick}
            handleCaretButtonClick={handleCaretButtonClick}
          />
        </>
      )}
      {isLoading && <Loader />}
    </div>
  )
}

export default Gallery
