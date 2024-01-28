import { useParams } from 'react-router-dom'

import { Heading, Image, Loader, Pagination } from '@components'

const Gallery = ({
  data,
  images,
  imageCount,
  currentPage,
  totalPages,
  isLoading,
  handlePageButtonClick,
}) => {
  if (!data) {
    return null
  }

  const { query } = useParams()

  const { title, resultsPerPage, initImages, initImageCount } = data

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
          />
        </>
      )}
      {isLoading && <Loader />}
    </div>
  )
}

export default Gallery
