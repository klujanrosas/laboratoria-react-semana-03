import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import './styles.css'
import Main from './components/Main'
import store from './config/store'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

render(
  <App />,
  document.getElementById('root')
)
