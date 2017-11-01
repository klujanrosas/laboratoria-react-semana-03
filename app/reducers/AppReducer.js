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
      texto: 'Link 1'
    },
    {
      href: '#',
      texto: 'Link 2'
    },
    {
      href: '#',
      texto: 'Link 3'
    },
    {
      href: '#',
      texto: 'Link 4'
    }
  ]
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // más operaciones
    default:
      return state
  }
}
