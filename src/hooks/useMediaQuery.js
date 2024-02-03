// Modified https://upmostly.com/tutorials/how-to-use-media-queries-in-react

import { useState, useEffect } from 'react'

import { breakpoints } from '@theme'

const useMediaQuery = (screen) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const query = `(max-width: ${breakpoints[screen] - 1}px)`
    const media = window.matchMedia(query)
    if (media.matches !== matches) {
      setMatches(media.matches)
    }
    const listener = () => setMatches(media.matches)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  }, [matches, screen])

  return matches
}

export default useMediaQuery
