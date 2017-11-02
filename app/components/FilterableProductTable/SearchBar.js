import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { filterTextChanged, inStockOnlyChanged } from '../../actions'

const SearchBar = ({
  filterText,
  inStockOnly,
  setFilterText,
  setStockOnlyValue
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={(event) => {
          setFilterText(event.target.value)
        }}
      />
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(event) => {
            setStockOnlyValue(event.target.checked)
          }}
        />
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  inStockOnly: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,
  setStockOnlyValue: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { AppReducer: { filterText, inStockOnly } } = state
  return {
    filterText,
    inStockOnly
  }
}

export default connect(
  mapStateToProps,
  {
    setFilterText: filterTextChanged,
    setStockOnlyValue: inStockOnlyChanged
  }
)(SearchBar)
