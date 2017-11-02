import {
  FILTER_TEXT_CHANGED,
  IN_STOCK_ONLY_CHANGED
} from '../actions/types'

// Supongamos que esto recibimos del API en forma JSON
const PRODUCTS = [
  {
    category: 'Sporting Goods',
    price: '$49.99',
    stocked: true,
    name: 'Football'
  },
  {
    category: 'Sporting Goods',
    price: '$9.99',
    stocked: true,
    name: 'Baseball'
  },
  {
    category: 'Sporting Goods',
    price: '$29.99',
    stocked: false,
    name: 'Basketball'
  },
  {
    category: 'Electronics',
    price: '$99.99',
    stocked: true,
    name: 'iPod Touch'
  },
  {
    category: 'Electronics',
    price: '$399.99',
    stocked: false,
    name: 'iPhone 5'
  },
  {
    category: 'Electronics',
    price: '$1666699.99',
    stocked: true,
    name: 'Nexus 7'
  }
]

const INITIAL_STATE = {
  originalProducts: PRODUCTS, // lista original de productos
  filterText: '', // texto que ingresa el usuario para buscar
  inStockOnly: false, // valor del checkbox de stock only
  filteredProducts: PRODUCTS, // inicialmente no hay ningun filtro
  // Propiedades para la barra lateral
  asideTitulo: 'Links',
  asideLinks: [
    {
      href: '#',
      texto: 'Enlace 1'
    },
    {
      href: '#',
      texto: 'Enlace 2'
    },
    {
      href: '#',
      texto: 'Enlace 3'
    },
    {
      href: '#',
      texto: 'Enlace 4'
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  let newState = {}
  switch (action.type) {
    case FILTER_TEXT_CHANGED:
      newState = {
        ...state,
        filterText: action.payload
      }
      break
    case IN_STOCK_ONLY_CHANGED:
      newState = {
        ...state,
        inStockOnly: action.payload
      }
      break
    default:
      return state
  }

  if (action.type === FILTER_TEXT_CHANGED || action.type === IN_STOCK_ONLY_CHANGED) {
    const filteredProducts = state.originalProducts.filter((product) => {
      const filterText =
        action.type === FILTER_TEXT_CHANGED ?
          action.payload.trim() :
          state.filterText.trim()
      const inStockOnly =
        action.type === IN_STOCK_ONLY_CHANGED ?
          action.payload :
          state.inStockOnly

      return (
        (inStockOnly ? product.stocked : true) &&
        product.name.match(new RegExp(filterText, 'ig'))
      )
    })

    newState = {
      ...newState,
      filteredProducts
    }
  }

  return newState
}
