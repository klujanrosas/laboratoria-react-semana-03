import React from 'react'

import ListaLibros from './ListaLibros'
import ItemLibro from './ItemLibro'
import DetalleLibro from './DetalleLibro'

const Main = () => {
  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      width: '100%',
      flexFlow: 'row nowrap'
    }}>
      <ListaLibros>
        <ItemLibro />
        <ItemLibro />
        <ItemLibro />
        <ItemLibro />
      </ListaLibros>
      <DetalleLibro />
    </div>
  )
}

export default Main
