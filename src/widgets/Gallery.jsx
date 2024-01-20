import { Heading, Image } from '../components'

const Gallery = ({ data }) => {
  if (!data) {
    return null
  }

  const { title, images } = data

  return (
    <div className='photo-container'>
      {title && (
        <Heading as='h2' variant='title'>
          {title}
        </Heading>
      )}
      <ul>
        {images &&
          images.map((image) => {
            const { id, src, alt } = image

            return <Image key={id} src={src} alt={alt} />
          })}
      </ul>
    </div>
  )
}

export default Gallery
