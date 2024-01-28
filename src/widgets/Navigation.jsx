import { NavLink } from 'react-router-dom'

const Navigation = ({ data }) => {
  if (!data) {
    return null
  }

  const { links } = data

  return (
    <nav className='main-nav'>
      <ul>
        {!!links?.length &&
          links.map((link) => {
            const { id, title, url, target } = link

            return (
              <li key={id}>
                <NavLink to={url} target={target}>
                  {title}
                </NavLink>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default Navigation
