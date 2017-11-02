import React from 'react'
import PropTypes from 'prop-types'

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  )
}

ProductCategoryRow.propTypes = {
  category: PropTypes.string.isRequired
}

const ProductRow = ({ product }) => {
  const name = product.stocked ?
    product.name :
    (
      <span style={{ color: 'red' }}>
        {product.name}
      </span>
    )
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

ProductRow.propTypes = {
  product: PropTypes.shape({
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
}

const ProductTable = ({ products }) => {
  const rows = []
  let lastCategory = null
  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />)
    }
    rows.push(<ProductRow product={product} key={product.name} />)
    lastCategory = product.category
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

ProductTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    stocked: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  }))
}

export default ProductTable

