import React from 'react'
import { render } from 'react-dom'

import './assets/styles/base.css'

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
