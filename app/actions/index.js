import {
  LIBRO_SELECCIONADO
} from './types'

export const libroSeleccionado = (libro) => {
  console.log('ActionCreator libroseleccionado', libro)
  
  return {
    type: LIBRO_SELECCIONADO,
    payload: libro
  }
}
