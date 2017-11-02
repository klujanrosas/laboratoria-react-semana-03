import React from 'react'
import PropTypes from 'prop-types'
// react-redux
import { connect } from 'react-redux'

import Page from './Page'
import Aside from './Aside'
import FilterableProductTable from './FilterableProductTable'
import CuentaRegresiva from './CuentaRegresiva'

const Main = ({ products = [], asideTitulo = 'Título Default', asideLinks = [] }) => {
  return (
    <Page>
      <CuentaRegresiva />
      {/* <FilterableProductTable products={products} />
      <Aside links={asideLinks} titulo={asideTitulo} /> */}
    </Page>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

const mapStateToProps = (state) => {
  const {
    AppReducer: {
      filteredProducts,
      asideTitulo,
      asideLinks
    }
  } = state

  return {
    products: filteredProducts,
    asideTitulo,
    asideLinks
  }
}

const MainWithRedux = connect(mapStateToProps)(Main)

export default MainWithRedux
