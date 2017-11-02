import React from 'react'
import PropTypes from 'prop-types'

import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  const style = {
    width: '70%',
    float: 'left'
  }

  return (
    <div style={style}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  )
}

FilterableProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }))
}

export default FilterableProductTable
