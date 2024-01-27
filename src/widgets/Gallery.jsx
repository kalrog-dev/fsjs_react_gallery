import { Heading, Image, Loader } from '@components'

const Gallery = ({ data, images, isLoading }) => {
  if (!data) {
    return null
  }

  const { title } = data

  return (
    <div className='photo-container'>
      {!isLoading && !!images?.length && (
        <>
          {title && (
            <Heading as='h2' variant='title'>
              {title}
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
        </>
      )}
      {isLoading && <Loader />}
    </div>
  )
}

export default Gallery
