import React from 'react'
import { render } from 'react-dom'

import './styles.css'

const App = () => {
  return (
    <div>
      Hola Mundo
    </div>
  )
}

render(
  <App />,
  document.getElementById('root')
)
