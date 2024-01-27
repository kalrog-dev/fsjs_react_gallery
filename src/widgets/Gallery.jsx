import { Heading, Image } from '@components'

const Gallery = ({ data, images }) => {
  if (!data) {
    return null
  }

  const { title } = data

  return (
    <div className='photo-container'>
      {title && (
        <Heading as='h2' variant='title'>
          {title}
        </Heading>
      )}
      <ul>
        {!!images?.length &&
          images.map((image) => {
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
