const Navigation = ({ data }) => {
  const { links } = data

  return (
    <nav className='main-nav'>
      <ul>
        {links &&
          links.length > 0 &&
          links.map((link) => {
            const { id, title, url, target } = link

            return (
              <li key={id}>
                <a href={url} target={target}>
                  {title}
                </a>
              </li>
            )
          })}
      </ul>
    </nav>
  )
}

export default Navigation
