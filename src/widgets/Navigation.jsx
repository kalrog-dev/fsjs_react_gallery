import { NavLink } from 'react-router-dom'

const Navigation = ({ routes }) => {
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
