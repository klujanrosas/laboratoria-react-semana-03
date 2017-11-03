import { combineReducers } from 'redux'

import LibrosReducer from './LibrosReducer'
import LibroSeleccionadoReducer from './LibroSeleccionadoReducer'

export default combineReducers({
  libros: LibrosReducer,
  libroActivo: LibroSeleccionadoReducer
})
