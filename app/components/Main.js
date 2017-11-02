import React from 'react'
import PropTypes from 'prop-types'
// react-redux
import { connect } from 'react-redux'

import Page from './Page'
import Tabs from './Tabs'
import Tab from './Tabs/Tab'

const Main = () => {
  return (
    <Page>
      <Tabs>
        <Tab title="Tab 1">
          <h1>Soy el Tab 1</h1>
        </Tab>
        <Tab title="Tab 2">
          <h1>Soy el Tab 2</h1>
        </Tab>
        <Tab title="Tab 3">
          <h1>Soy el Tab 3</h1>
        </Tab>
      </Tabs>
    </Page>
  )
}

export default Main

