import React from 'react'
import { render } from 'react-dom'

import './styles.css'
import CuentaRegresiva from './components/CuentaRegresiva'

const App = () => {
  return (
    <CuentaRegresiva />
  )
}

render(
  <App />,
  document.getElementById('root')
)
