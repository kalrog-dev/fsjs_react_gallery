import FsLightbox from 'fslightbox-react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { Heading, Image, Loader, Pagination, NotFound } from '@components'

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

  const { title, notFound } = data

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
  const navigate = useNavigate()

  useEffect(() => {
    getStaticRouteImages(defaultQuery ?? query)
  }, [defaultQuery])

  return (
    <div className='photo-container'>
      {isLoading && <Loader />}
      {!isLoading && !!images?.length && (
        <>
          {title && (
            <Heading as='h2' variant='title'>
              <span className='title-name'>{title}</span>
              <span className='title-count'>{`(${imageCount})`}</span>
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
      {!isLoading && !images?.length && (
        navigate('/404', { replace: true })
      )}
      <FsLightbox
        toggler={lightboxController.toggler}
        sources={images.map((image) => {
          const { id, secret, server } = image
          return `https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg`
        })}
        slide={lightboxController.slide + 1}
      />
    </div>
  )
}

export default Gallery
