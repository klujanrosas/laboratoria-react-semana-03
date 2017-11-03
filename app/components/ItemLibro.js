import React from 'react'
import { connect } from 'react-redux'
import { libroSeleccionado } from '../actions'

const ItemLibro = (props) => {
  const { libro } = props
  console.log('ItemLibro props', props)
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        width: '100%',
        margin: '10px 0',
        border: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2em',
      }}
      onClick={() => props.seleccionarLibro(libro)}
    >
      {libro.title}
    </div>
  )
}

const ItemLibroConRedux = connect(
  null,
  {
    seleccionarLibro: libroSeleccionado
  }
)(ItemLibro)

export default ItemLibroConRedux
