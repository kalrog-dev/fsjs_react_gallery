import { Heading } from '@/components'

const NotFound = ({ data }) => {
  if (!data) {
    return null
  }

  const { title, description } = data

  return (
    <div className='not-found'>
      {title && <Heading as='h3' variant='title'>{title}</Heading>}
      {description && <p>{description}</p>}
    </div>
  )
}

export default NotFound
