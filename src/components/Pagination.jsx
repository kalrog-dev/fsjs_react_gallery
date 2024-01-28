import { getPaginationRange, isMissingProp } from '@utils'

const Pagination = (props) => {
  if (!props || !Object.keys(props).length > 0) {
    return null
  }

  const { currentPage, totalPages } = props

  if (isMissingProp(currentPage, totalPages)) {
    return null
  }

  const innerPageCount = 7
  const paginationRange = getPaginationRange(
    currentPage,
    totalPages,
    innerPageCount
  )

  return (
    <div className='pagination'>
      {totalPages >= 2 &&
        paginationRange.map((page, index) => {
          const id = `page-button-${index}`
          const isActive = page === currentPage
          const classNames = isActive
            ? 'page-button page-button-active'
            : 'page-button'

          return (
            <button key={id} className={classNames} disabled={page === null}>
              {page ?? '...'}
            </button>
          )
        })}
    </div>
  )
}

export default Pagination
