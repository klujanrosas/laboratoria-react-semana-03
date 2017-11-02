import React from 'react'
import PropTypes from 'prop-types'

const Aside = ({ links, titulo }) => {
  const style = {
    width: '25%',
    float: 'right'
  }

  const children = links.map((linkProps) => {
    const { href, texto } = linkProps
    return (
      <li key={Math.random()}>
        <a href={href}>
          {texto}
        </a>
      </li>
    )
  })

  return (
    <section style={style}>
      <h4>{titulo}</h4>
      <ul>
        {children}
      </ul>
    </section>
  )
}

Aside.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired
  })).isRequired,
  titulo: PropTypes.string.isRequired
}

export default Aside
