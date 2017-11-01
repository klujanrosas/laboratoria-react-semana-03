import React from 'react'
import PropTypes from 'prop-types'

const Page = ({ children }) => (
  <div>
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf([
      PropTypes.node,
      PropTypes.element
    ])
  ])
}

export default Page
