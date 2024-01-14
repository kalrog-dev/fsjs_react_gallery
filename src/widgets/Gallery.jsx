import { Image } from '../components'

const Gallery = ({ data }) => {
  const { title, images } = data

  return (
    <div className='photo-container'>
      {title && <h2>{title}</h2>}
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
