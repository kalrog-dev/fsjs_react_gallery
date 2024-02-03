import { NavLink } from 'react-router-dom'

const Navigation = ({ data, routes }) => {
  if (!data) {
    return null
  }

  return (
    <nav className='main-nav'>
      <ul>
        {!!routes?.length &&
          routes.map((route) => {
            const { id, title, url, target } = route

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
