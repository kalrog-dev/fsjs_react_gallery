const getPaginationRange = (currentPage, totalPages, innerPageCount) => {
  const firstPage = 1
  const innerPages = []
  const lastPage = totalPages

  // Get innerPages
  if (
    (currentPage >= firstPage + innerPageCount - 1 &&
    currentPage <= lastPage - innerPageCount)

  ) {
    for (let i = 1; i <= Math.floor(innerPageCount / 2); i++) {
      innerPages.push(currentPage + i)
      innerPages.push(currentPage - i)
    }
    innerPages.push(currentPage)
    innerPages.sort((a, b) => a - b)
  } else {
    if (currentPage < innerPageCount) {
      for (let i = 1; (i <= innerPageCount && i < lastPage - 1); i++) {
        innerPages.push(1 + i)
      }
    } else if (currentPage > lastPage - innerPageCount) {
      for (let i = innerPageCount; i >= 1; i--) {
        innerPages.push(lastPage - i)
      }
    }
  }

  const range = [firstPage, null, ...innerPages, null, lastPage]

  // Remove '...' buttons
  if (currentPage < innerPageCount) {
    range.splice(1, 1)
  }

  if (currentPage > lastPage - innerPageCount) {
    range.splice(-2, 1)
  }

  return range
}

export default getPaginationRange
