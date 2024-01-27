import { useParams } from 'react-router-dom'

import { Heading, Image } from '@components'

const Gallery = ({ data, images, isLoading }) => {
  if (!data) {
    return null
  }

  const { title } = data
  const { query } = useParams()

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
            console.log(image)
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
    </div>
  )
}

export default Gallery
