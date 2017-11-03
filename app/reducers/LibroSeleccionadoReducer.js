import {
  LIBRO_SELECCIONADO
} from '../actions/types'

export default (state = null, action) => {
  switch (action.type) {
    case LIBRO_SELECCIONADO:
      return action.payload
    default:
      return state
  }
}

