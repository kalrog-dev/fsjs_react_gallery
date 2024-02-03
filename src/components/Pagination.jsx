import { useMediaQuery } from '@hooks'
import { getPaginationRange, isMissingProp } from '@utils'

const Pagination = (props) => {
  if (!props || !Object.keys(props).length > 0) {
    return null
  }

  const {
    query,
    currentPage,
    totalPages,
    handlePageButtonClick,
    handleCaretButtonClick,
  } = props

  if (
    isMissingProp(
      query,
      currentPage,
      totalPages,
      handlePageButtonClick,
      handleCaretButtonClick
    )
  ) {
    return null
  }

  const isMobile = useMediaQuery('md')
  const innerPageCount = isMobile ? 3 : 7

  const paginationRange = getPaginationRange(
    currentPage,
    totalPages,
    innerPageCount
  )

  return (
    <div className='pagination'>
      <button
        className='caret-button'
        disabled={currentPage === 1}
        onClick={handleCaretButtonClick('prev', query)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 256 256'
        >
          <path
            fill='currentColor'
            d='M165.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L91.31 128Z'
          />
        </svg>
      </button>
      {totalPages >= 2 &&
        paginationRange.map((page, index) => {
          const id = `page-button-${index}`
          const isActive = page === currentPage
          const classNames = isActive
            ? 'page-button page-button-active'
            : 'page-button'

          return (
            <button
              key={id}
              className={classNames}
              disabled={page === null}
              onClick={(e) => handlePageButtonClick(e, query)}
            >
              {page ?? '...'}
            </button>
          )
        })}
      <button
        className='caret-button'
        disabled={currentPage === totalPages}
        onClick={handleCaretButtonClick('next', query)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='1em'
          height='1em'
          viewBox='0 0 256 256'
        >
          <path
            fill='currentColor'
            d='m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32'
          />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
