import React from 'react'
import PropTypes from 'prop-types'

import Page from './Page'
import Aside from './Aside'
import FilterableProductTable from './FilterableProductTable'

const Main = ({ products = [], asideTitulo = 'Título Default', asideLinks = [] }) => {
  asideTitulo = 'Links'
  asideLinks = [
    { href: '#', texto: 'Link 1'},
    { href: '#', texto: 'Link 2'},
    { href: '#', texto: 'Link 3'},
    { href: '#', texto: 'Link 4'},
    { href: '#', texto: 'Link 5'}
  ]
  // Definimos estaticamente los productos
  products = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$1666699.99', stocked: true, name: 'Nexus 7'}
  ]
  return (
    <Page>
      <FilterableProductTable products={products} />
      <Aside links={asideLinks} titulo={asideTitulo} />
    </Page>
  )
}

Main.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  asideTitulo: PropTypes.string.isRequired,
  asideLinks: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default Main
