import FsLightbox from 'fslightbox-react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Heading, Image, Loader, Pagination } from '@components'

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

  const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});

  const openLightboxOnSlide = (number) => () => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}
  
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
            {images.map((image, index) => {
              const { id, secret, server, title } = image

              return (
                <button
                  key={id}
                  className='lightbox-trigger-button'
                  onClick={openLightboxOnSlide(index)}
                >
                  <Image
                    src={`https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`}
                    alt={title}
                  />
                </button>
              )
            })}
          </ul>
          <Pagination
            query={query ?? defaultQuery}
            currentPage={currentPage}
            totalPages={totalPages}
            handlePageButtonClick={handlePageButtonClick}
            handleCaretButtonClick={handleCaretButtonClick}
          />
        </>
      )}
      {isLoading && <Loader />}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map((image) => {
          const { id, secret, server } = image
          return `https://live.staticflickr.com/${server}/${id}_${secret}_w.jpg`
        })}
        slide={lightboxController.slide + 1}
      />
    </div>
  )
}

export default Gallery
